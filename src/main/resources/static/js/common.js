$(document).ready(function () {
    AppUtils.loadTemplate($('#currentScreenInfo').val());
    AppUtils.loadModal();
    $('title').text('Production Instruction and History Data System (PIHD)');
    $.when(AppUtils.callApi("/secured/activeProfile", "GET", null))
        .done(function (response) {
            let activeProfile = response.data;
            if (activeProfile == 'OFFLINE') {
                localStorage.setItem(AppUtils.LOGIN_NAME, "testUser");
                AppUtils.allMenuRender();
            } else {
                AppUtils.userMenuRender();
            }
            // required for set active menu
            AppUtils.setActiveMenu($('#currentScreenId').val());
        });


    $.each($('form'), function (indexInArray, valueOfElement) {
        $(valueOfElement).on('submit', function (event) {
            event.preventDefault();
            return false;
        });
    });
    $('body').on('click', '#menucaller', function () {
        $('.ui.sidebar')
            .sidebar('setting', 'transition', 'push')
            .sidebar('toggle');
    });

    // timer
    let displayDBServerTime = function () {
        $.when(AppUtils.callApi('/secured/serverTime', 'GET', null))
            .done(function (response) {
                let dateTime = moment(response.data);
                $('.time').text(dateTime.format('DD MMM YYYY HH:mm:ss'));
                setInterval(function () {
                    dateTime.add(1000, 'milliseconds');
                    $('.time').text(dateTime.format('DD MMM YYYY HH:mm:ss'));
                }, 1000);
            });
    };
    // call displayDBServerTime immediately
    displayDBServerTime();
    // repeat call every 5 min to for update
    setInterval(displayDBServerTime, 300000);
});