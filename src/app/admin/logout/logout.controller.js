export default LogoutController;

LogoutController.$inject = ['ProfileService'];

/* @ngInject */
function LogoutController(ProfileService) {
    var vm   = this;
    vm.title = 'LogoutController';

    activate();

    ////////////////

    function activate() {
        ProfileService.unsetProfile();
    }
}
