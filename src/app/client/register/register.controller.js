export default RegisterController;

RegisterController.$inject = ['UserService', 'ProfileService', 'filterByFilter', '$state'];

function RegisterController (UserService, ProfileService, filterBy, $state) {

    var vm = this;

    vm.title = 'Register Controller';

    activate();

    vm.userData= {
        username: '',
        name: '',
        password: '',
        email: ''
    };

    vm.ui = {
        errors: {
            taken: false
        }
    };

    var users = [];

    ////////////////

    function activate() {

        UserService.getAllUsers({}, function success (response) {
            users = response.result;
        });
    }

    vm.initiateRegister = function () {

        if( vm.registerForm.$valid && !vm.ui.errors.taken) {

            UserService.registerUser(vm.userData, registrationSuccess, registrationError);

        }else {
            console.log('NO');
            // TODO: focus on first invalid input
        }
    };

    /***
     *
     * @param response
     */
    function registrationSuccess (response){

        console.log(response);
        
        ProfileService.setProfile(response.result);
        $state.go('app.admin.home');
    }

    /***
     *
     * @param response
     */
    function registrationError (response) {

        console.error(response);
    }

    vm.checkUsername = function () {


        if(vm.registerForm.username.$valid) {

            if(filterBy(users, vm.userData.username)){
                vm.ui.errors.taken = true;
            }else {
                vm.ui.errors.taken = false;
            }
        }
    };
}

