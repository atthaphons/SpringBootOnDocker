$(document).ready(function () {

    let loginButton = $('#loginButton');
    loginButton.click(_.debounce(function (e) {
        e.preventDefault();
        if ($('#loginForm').form('validate form')) {
            let loginData = $('#loginForm').form('get values');

            console.log(JSON.stringify(loginData))
            if ((loginData.username == 'admin') && (loginData.password == '1234')) {
                window.location = '../products/product_page.html';
            }

            // $.when(AppUtils.callApi("/login", "POST", JSON.stringify(loginData)))
            //     .done(function (response, status, jqXHR) {
            //         localStorage.setItem(AppUtils.PIHD_TOKEN, jqXHR.getResponseHeader(AppUtils.PIHD_TOKEN));
            //         localStorage.setItem(AppUtils.LOGIN_NAME, response.data);
            //         window.location = '../home/home.html';
            //     });
        }
    }, 300, true));
});