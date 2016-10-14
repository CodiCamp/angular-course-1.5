export default LoginController;

LoginController.$inject = ['$scope'];

function LoginController ($scope) {

    var vm = this;

    vm.title = 'Login Controller';

    activate();

    ////////////////

    function activate() {

    }

    vm.initiateLogin = function () {

       if( vm.loginForm.$valid) {
            console.log('YES');
           
       }else {
           console.log('NO');
       }
    }
}

