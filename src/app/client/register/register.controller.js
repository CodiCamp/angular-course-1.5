export default RegisterController;

RegisterController.$inject = ['$scope', 'UserService'];

function RegisterController ($scope, UserService) {

    var vm = this;

    vm.title = 'Register Controller';

    activate();

    vm.userData= {
        username: '',
        name: '',
        password: '',
        email: ''
    };

    ////////////////

    function activate() {

    }

    vm.initiateRegister = function () {

        if( vm.registerForm.$valid) {
            console.log('YES');

            UserService.registerUser(vm.userData,
                function success (response){

                    console.log(response);
                }, function error (response) {

                    console.error(response);
                });

        }else {
            console.log('NO');
        }
    };

    vm.checkUsername = function () {

        if(vm.userData.username.length > 5) {

            console.log('check for user');
        }
    };
}

