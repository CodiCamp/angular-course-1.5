import 'angular';

import config from './admin.config';

import adminHomeModule from './home/home.module';
import adminBoardModule from './board-view/board.module';

let adminDependencies = [
    adminHomeModule, 
    adminBoardModule
];

export default angular.module('app.admin', adminDependencies)
    .config(config).name;