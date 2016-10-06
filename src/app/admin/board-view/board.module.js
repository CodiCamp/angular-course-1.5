import 'angular';
import config from './board.config';

import cardModule from './card-view/card.module';

let boardDependencies = [
    cardModule
];
export default angular.module('admin.board', boardDependencies)
    .config(config).name;