/***
 * Libraries
 */
import 'angular';
import 'ui-router';
import 'angularMaterialize';
import 'ng-resource';
import 'ng-storage';

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
import appProviders from './providers/app.providers';
import appFilters from './filters/app.filters';

import appConstants from './constants/app.constants';

/**
 * Define application dependencies
 * @type {Array}
 */
let appDependencies = [
    'ui.router',
    'ui.materialize',
    'ngResource',
    'ngStorage',
    commonDirectives,
    appServices,
    appProviders,
    appConstants,
    appFilters,
    
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

appRun.$inject = ['$rootScope', '$state', 'ProfileService'];

function appRun ($rootScope, $state, ProfileService) {


    $rootScope.$on('$stateChangeStart', handleStateChange);

    function handleStateChange (evnt, toState, toParams, fromState, fromParams, options) {

        if(ProfileService.isLoggedIn() === toState.params.requeireLogin) {

        }else {
            evnt.preventDefault();

            if(ProfileService.isLoggedIn()) {
                $state.go('app.admin.home');
            }else {
                $state.go('app.client.home');
            }
        }
    }
}
