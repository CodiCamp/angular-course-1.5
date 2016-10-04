/***
 * Libraries
 */
import 'angular';
import 'ui-router';

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
/**
 * Define application dependencies
 * @type {Array}
 */
let appDependencies = [
    'ui.router',
    commonDirectives,
    clientModule,
    adminModule
];

/**
 * Main app module
 * @type {angular.Module}
 */
let app = angular.module('app', appDependencies);

app.config(config);