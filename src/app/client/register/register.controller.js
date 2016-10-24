export default RegisterController;

RegisterController.$inject = ['UserService', 'ProfileService'];

function RegisterController (UserService, ProfileService) {

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

            UserService.registerUser(vm.userData, registrationSuccess, registrationError);

        }else {
            console.log('NO');
        }
    };

    /***
     *
     * @param response
     */
    function registrationSuccess (response){

        console.log(response);
        
        ProfileService.setProfile(response.result);
    }

    /***
     *
     * @param response
     */
    function registrationError (response) {

        console.error(response);
    }

    vm.checkUsername = function () {

        if(vm.userData.username.length > 5) {

            console.log('check for user');
        }
    };
}

