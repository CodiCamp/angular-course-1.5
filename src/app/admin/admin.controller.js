
export default AdminController;

AdminController.$inject = ['ProfileService'];

/* @ngInject */
function AdminController(ProfileService) {
    var vm   = this;
    vm.title = 'AdminController';

    activate();

    ////////////////

    function activate() {

    }
}