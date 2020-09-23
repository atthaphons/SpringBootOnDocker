let AppUtils = (function ($) {
    // class properties
    'use strict'
    return {
        MODE_ADD: 'ADD',
        MODE_SEARCH: 'SEARCH',
        MODE_EDIT: 'EDIT',
        MODE_REGISTER: 'REGISTER',
        MODE_INITIAL: 'INITIAL',
        MODE_NEXT_VERSION: 'NEXT_VERSION',
        MODE_FIX_SEQUENCE: 'FIX_SEQUENCE',
        COMBOBOX_ALL: 'All',
        COMBOBOX_SELECT: 'Select',
        PIHD_TOKEN: 'pihd_token',
        LOGIN_NAME: 'loginUserId',
        ACTIVE_PROFILE: 'active_profile',
        setActiveMenu: function (screenId) {
            let creenIdObj = $('#' + screenId)
            creenIdObj.toggleClass("active");
            return false;
        },
        createSelectOption: function (selectObj, comboList, firstItemText) {
            selectObj.find('option').remove().end();
            if (firstItemText != null) {
                selectObj.append($('<option>', {
                    value: firstItemText,
                    text: firstItemText
                }));
            }
            if (comboList != null) {
                for (let ii = 0; ii < comboList.length; ii++) {
                    let item = comboList[ii];
                    selectObj.append($('<option>', {
                        value: item.value,
                        text: item.name
                    }));
                }
            }
        },
        formatDate: function (javaDate, format) {
            if (S(javaDate).isEmpty()) {
                return '';
            } else {
                return moment(new Date(javaDate)).format(format);
            }
        },
        parseDate: function (stringDate, format) {
            if (S(stringDate).isEmpty()) {
                return null;
            } else {
                return moment(stringDate, format).toDate();
            }
        },
        parseDateForDB: function (stringDate, format) {
            if (S(stringDate).isEmpty()) {
                return null;
            } else {
                return moment(stringDate, format).toDate().getTime();
            }
        },
        comfirmModal: function (messageCode, params) {
            $('#confirmingModal').children(".header").empty();
            $('#confirmingModal').children(".content").empty();
            $('#confirmingModal').children(".header").removeClass("yellow red green");
            $('#confirmingModal').children(".header").addClass("green");
            $('#confirmingModal').children(".header").append(messageCode);
            let confirmMessage = message_confirm[messageCode];
            if (params != null) {
                for (let indexInArray = 0; indexInArray < params.length; indexInArray++) {
                    let valueOfElement = params[indexInArray];
                    confirmMessage = confirmMessage.replace('{' + indexInArray + '}', valueOfElement);
                }
            }
            $('#confirmingModal').children(".content").append(confirmMessage);
            return $('#confirmingModal');
        },
        alertModal: function (messageCode, params) {
            $('#alertModal').children(".header").empty();
            $('#alertModal').children(".content").empty();
            $('#alertModal').children(".header").removeClass("yellow red green");
            $('#alertModal').children(".header").append(messageCode);

            let messageType = messageCode.substr(-3);
            let alertMessage = "";
            switch (messageType) {
                case 'INF':
                    alertMessage = message_info[messageCode];
                    $('#alertModal').children(".header").addClass("green");
                    break;
                case 'WRN':
                    alertMessage = message_warning[messageCode];
                    $('#alertModal').children(".header").addClass("yellow");
                    break;
                case 'ERR':
                    alertMessage = message_error[messageCode];
                    $('#alertModal').children(".header").addClass("red");
                    break;
            }

            if (params != null) {
                for (let indexInArray = 0; indexInArray < params.length; indexInArray++) {
                    let valueOfElement = params[indexInArray];
                    alertMessage = alertMessage.replace('{' + indexInArray + '}', valueOfElement);
                }
            }

            $('#alertModal').children(".content").append(alertMessage);
            return $('#alertModal');
        },
        callApi: function (uri, method, reqData) {
            console.log("uri : " + uri)
            console.log("method : " + method)
            console.log("reqData : " + reqData)
            // let token = {};
            // token.pihd_token = localStorage.getItem(AppUtils.PIHD_TOKEN);
            return $.ajax({
                type: method,
                url: config.baseUrl + uri,
                "cache": false,
                "contentType": "application/json; charset=utf-8",
                "data": reqData,
                error: AppUtils.ajaxErrorHandler
            });
        },
        ajaxErrorHandler: function (jqXHR) {
            if (jqXHR.status == 404) {
                let modal = AppUtils.alertModal('MCOM1000000ERR', null);
                modal.modal({
                    selector: {
                        close: '#modalButtonOK'
                    }
                });
                modal.modal('show');
            } else if (jqXHR.status == 500) {
                let modal = AppUtils.alertModal('MCOM0000000ERR', null);
                modal.modal({
                    selector: {
                        close: '#modalButtonOK'
                    }
                });
                modal.modal('show');
            } else {
                let messageCode = jqXHR.responseJSON.messageCode;
                let modal = AppUtils.alertModal(messageCode, null);
                modal.modal({
                    selector: {
                        close: '#modalButtonOK'
                    },
                    onHidden: function () {
                        if (messageCode == 'ML0001000005ERR') {
                            AppUtils.logout();
                        } else if (messageCode == 'ML0001000006ERR') {
                            window.location = "../home/home.html";
                        }
                    }
                });
                modal.modal('show');
            }

        },
        logout: function () {
            localStorage.removeItem(AppUtils.PIHD_TOKEN);
            localStorage.removeItem(AppUtils.LOGIN_NAME);
            window.location = "../login/login.html";
        },

        loadTemplate: function (screenInfo) {
            $.get("../template/menu.html", function (response) {
                $(response).appendTo("#app_menu");
            });
            $.get("../template/screeninfo.html", function (response) {
                $(response).appendTo("body");
                $('.screenid').text(screenInfo);
                $('.userinfo').text(localStorage.getItem(AppUtils.LOGIN_NAME));
            });
            $.get("../template/footer.html", function (response) {
                $(response).appendTo("body");
            });
        },
        loadTemplateAppMode: function (screenInfo) {
            $.get("../template/screeninfo_app.html", function (response) {
                $(response).appendTo("body");
                $('.screenid_app').text(screenInfo);
                $('.userinfo').text(localStorage.getItem(AppUtils.LOGIN_NAME));
            });
            $.get("../template/footer.html", function (response) {
                $(response).appendTo("body");
            });
        },
        loadModal: function () {
            $.get("../template/modal.html", function (response) {
                $(response).appendTo("body");
            });
        },
        userMenuRender: function () {
            let userId = localStorage.getItem(AppUtils.LOGIN_NAME);
            $.when(AppUtils.callApi("/secured/menu/" + userId, "GET", null))
                .done(function (responseMenu) {
                    let menuArr = responseMenu.data;
                    for (let ii = 0; ii < menuArr.length; ii++) {
                        let menuGroup = menuArr[ii].groupCd;
                        $("#" + menuGroup).removeAttr("data-auth");
                        let menuItem = menuArr[ii].screenCd;
                        $("#" + menuItem).removeAttr("data-auth");
                    }
                    $("#securedMenu [data-auth='no']").empty();
                    $("#securedMenu [data-auth='no']").remove();
                });
        },
        allMenuRender: function () {
            $("#securedMenu [data-auth]").removeAttr("data-auth");
        },
        cloneArrayOfPlainObject: function (arrayPlainObject) {
            let clonedArray = [];
            if (arrayPlainObject != null && arrayPlainObject.length > 0) {
                for (let ii = 0; ii < arrayPlainObject.length; ii++) {
                    clonedArray.push(_.clone(arrayPlainObject[ii]));
                }
            }
            return clonedArray;
        }
    }
}(jQuery));