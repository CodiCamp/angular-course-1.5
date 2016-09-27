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
import homeModule from './home/home.module';

/**
 * Define application dependencies
 * @type {Array}
 */
let appDependencies = [
    'ui.router',
    homeModule
];

/**
 * Main app module
 * @type {angular.Module}
 */
let app = angular.module('app', appDependencies);

app.config(config);