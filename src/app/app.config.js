/***
 * Configure Main module
 **/

export default config;

config.$inject = ['$urlRouterProvider',
    '$stateProvider',
    '$locationProvider',
    '$httpProvider',
    'ProfileServiceProvider',
    '$translateProvider'];

function config ($urlRouterProvider,
                 $stateProvider,
                 $locationProvider,
                 $httpProvider,
                 ProfileServiceProvider,
                 $translateProvider) {

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

    /**
     * Configure translations
     */
    $translateProvider.preferredLanguage('en_EN');
    // $translateProvider.fallbackLanguage('bg_BG');

    $translateProvider.useSanitizeValueStrategy('escape');

    // Register a loader for the static files
    // So, the module will search missing translation tables under the specified urls.
    // Those urls are [prefix][langKey][suffix].
    $translateProvider.useStaticFilesLoader({
        prefix: 'translations/l10n/',
        suffix: '.json'
    });

    /**
     * Store translations in localstorage, also remembers the last used language
     */
    $translateProvider.useLocalStorage();
}