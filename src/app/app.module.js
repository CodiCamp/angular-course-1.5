/***
 * Libraries
 */
import 'angular';
import 'ui-router';
import uiMaterialize from 'ui.materialize';

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
    uiMaterialize,
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