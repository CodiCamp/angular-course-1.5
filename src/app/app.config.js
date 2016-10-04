/***
 * Configure Main module
 **/

export default config;

config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

function config ($urlRouterProvider, $stateProvider, $locationProvider) {

    /**
     * Setup hash bang URL's
     */
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');

    /**
     * Configure default routing
     */
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

    $stateProvider.state("app", {
        abstract: true,
        views: {
            app: {template: '<div ui-view class="page-wrapper"></div>'}
        }
    });
}