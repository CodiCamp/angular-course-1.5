/***
 * Configure Home module
 **/

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.client", {
        abstract: true,
        controller: clientController,
        // controllerAs: 'client',
        template: '<header-client></header-client><div ui-view="client" class="page-wrapper client"></div>'
    });

    clientController.$inject = ['$scope'];

    function clientController ($scope) {
        $scope.inheritToChilds = 'true';
        this.appClient = 'abstract app.client';
    }
}