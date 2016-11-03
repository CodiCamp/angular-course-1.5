/***
 * Configure Home module
 **/
import AdminController from './admin.controller';
export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.admin", {
        abstract: true,
        template: '<header-admin></header-admin><div ui-view="admin" class="page-wrapper admin"></div>',
        controller: AdminController,
        controllerAs: 'vm'
    });
}