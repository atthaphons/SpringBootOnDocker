var myModel = {
    loginHeader: "LOG IN",
    // loginClick: "GO",
    loginApiClick: "GO",
    username: "",
    password: "",
};
AppUtils.loadModal();
var LoginModel = new Vue({
    el: '#LoginView',
    data() {
        return {
            info: null
        },
        myModel
    },

    mounted: function () {
        $('#loginForm')
            .form({
                fields: {
                    username: 'empty',
                    password: 'empty'
                }
            });
    },
    methods: {
        getApiLogin: function () {
            if ($('#loginForm').form('validate form')) {
                vm = this;
                axios.get('/ExamSpringBootDemo/api/v1/login/go/' + this.username + "/" + this.password)
                    .then(function (response) {
                        // response => (this.info = response)
                        if (response.data == "COM001LOGIN0INF") {
                            window.location = '../products/product_page.html';
                        } else {

                            let modal = AppUtils.alertModal(response.data, [vm.username]);
                            modal.modal({
                                selector: {
                                    close: '#modalButtonOK'
                                }
                            });
                            modal.modal('show');

                        }
                    })
                    .catch(function (error) {
                        this.answer = 'Error! Could not reach the API. ' + error
                    })
            }
        },
        // loginButton: function () {
        //     if ($('#loginForm').form('validate form')) {
        //         let loginData = $('#loginForm').form('get values');
        //         if ((loginData.username == 'admin') && (loginData.password == '1234')) {
        //             window.location = '../products/product_page.html';
        //         }
        //     }
        // },
    }
});