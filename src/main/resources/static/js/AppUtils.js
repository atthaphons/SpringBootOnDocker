let AppUtils = (function ($) {
    // class properties
    'use strict'
    return {
        LOGGIN_MODE: 'Login With ',
        loadModal: function () {
            $.get("../template/modal.html", function (response) {
                $(response).appendTo("body");
            });
        },
        alertModal: function (messageCode, params) {
            console.log("params : " + params)
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
                    // console.log("params != null" + indexInArray)
                    let valueOfElement = params[indexInArray];
                    // console.log("valueOfElement : " + indexInvalueOfElementArray)
                    alertMessage = alertMessage.replace('{' + indexInArray + '}', valueOfElement);
                }
            }

            $('#alertModal').children(".content").append(alertMessage);
            return $('#alertModal');
        },

    }
}(jQuery));