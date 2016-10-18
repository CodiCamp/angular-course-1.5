export default LoginController;

LoginController.$inject = ['$scope', 'UserService'];

function LoginController ($scope, UserService) {

    var vm = this;

    vm.title = 'Login Controller';

    activate();
    

    ////////////////

    function activate() {

    }

    vm.initiateLogin = function () {

       if( vm.loginForm.$valid) {
            console.log('YES');

           UserService.authenticateUser({},
               function success (response){

                   console.log(response);
               }, function error (response) {

                   console.error(response);
               });
           
       }else {
           console.log('NO');
       }
    }
}

