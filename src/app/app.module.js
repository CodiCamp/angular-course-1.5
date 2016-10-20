/***
 * Libraries
 */
import 'angular';
import 'ui-router';
import 'angularMaterialize';
import 'ng-resource';

/***
 * App config
 */
import config from './app.config';

/***
 * App modules
 */

import clientModule from './client/client.module';
import adminModule from './admin/admin.module';

import commonDirectives from './app-directives/common.directives.js';
import appServices from './services/app.services';

/**
 * Define application dependencies
 * @type {Array}
 */
let appDependencies = [
    'ui.router',
    'ui.materialize',
    'ngResource',
    commonDirectives,
    appServices,
    
    clientModule,
    adminModule
];

/**
 * Main app module
 * @type {angular.Module}
 */
let app = angular.module('app', appDependencies);

app.config(config)
    .run(appRun);

// asd.call($scope['asd']);

appRun.$inject = ['$rootScope', '$state'];

function appRun ($rootScope, $state) {

    $rootScope.loggedIn = false;

    $rootScope.$on('$stateChangeStart', handleStateChange);

    function handleStateChange (evnt, toState, toParams, fromState, fromParams, options) {

        if($rootScope.loggedIn === toState.params.requeireLogin) {

        }else {
            evnt.preventDefault();

            if($rootScope.loggedIn) {
                $state.go('app.admin.home');
            }else {
                $state.go('app.client.home');
            }
        }
    }
}
