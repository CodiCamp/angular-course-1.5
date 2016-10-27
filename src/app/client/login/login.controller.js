export default LoginController;

LoginController.$inject = ['$state', 'UserService', 'filterByUPFilter', 'ProfileService'];

function LoginController ($state, UserService, filterByUP, ProfileService) {

    var vm = this;

    vm.title = 'Login Controller';
    let users = [];
    vm.userData = {
        username: '',
        password: ''
    };

    activate();

    ////////////////

    function activate() {
        UserService.getAllUsers({},
            function success (response){
                users = response.result;
                console.log(response);
            }, function error (response) {

                console.error(response);
            });
    }

    vm.initiateLogin = function () {

       if( vm.loginForm.$valid) {
           var userData = filterByUP(users, vm.userData);

           if (userData) {
                ProfileService.setProfile(userData);
               $state.go('app.admin.home');
           } else {
               // TODO: show error
           }
           
       }else {
           console.log('NO');
       }
    }
}

