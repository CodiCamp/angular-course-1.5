/***
 * Configure Home module
 **/

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.client", {
        abstract: true,
        template: '<header-client></header-client><div ui-view="client" class="page-wrapper client"></div>'
    });
}