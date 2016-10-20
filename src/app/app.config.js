/***
 * Configure Main module
 **/

export default config;

config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider','$httpProvider', 'ProfileServiceProvider'];

function config ($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider, ProfileServiceProvider) {

    ProfileServiceProvider.loadProfile();

    /**
     * Setup hash bang URL's
     *loggedIn
     */
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');

    /**
     * Configure default routing
     */
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

    $httpProvider.interceptors.push('loginInterceptor');

    $stateProvider.state("app", {
        abstract: true,
        views: {
            app: {
                template: '<div ui-view class="page-wrapper"></div><footer></footer>'
            }
        }
    });
}