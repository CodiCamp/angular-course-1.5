import 'angular';

import config from './admin.config';

import adminHomeModule from './home/home.module';
import adminLogoutModule from './logout/logout.module';
import adminBoardModule from './board-view/board.module';

import adminDirectives from './directives/admin.directives';

let adminDependencies = [
    adminDirectives,
    adminHomeModule, 
    adminBoardModule,
    adminLogoutModule
];

export default angular.module('app.admin', adminDependencies)
    .config(config).name;