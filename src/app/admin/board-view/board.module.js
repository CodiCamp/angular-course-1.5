import 'angular';
import config from './board.config';

export default angular.module('admin.board', [])
    .config(config).name;