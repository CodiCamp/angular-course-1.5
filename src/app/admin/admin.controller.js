
export default AdminController;

AdminController.$inject = ['SessionService'];

/* @ngInject */
function AdminController(SessionService) {
    var vm   = this;
    vm.title = 'AdminController';

    activate();

    ////////////////

    function activate() {

        SessionService.startSessionCheck();
    }
}