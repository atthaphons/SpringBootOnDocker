var myModelx = {
    loginHeader: "LOG IN",

};
var LoginModelExam = new Vue({
    el: '#LoginModelExam',
    data() {
        return {
            info: null
        },
        myModelx
    },
    template: '<span><sui-button primary>Welcome Vue</sui-button>{{message}}</span>',
});