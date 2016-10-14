import 'angular';
import UserService from './user.service';

export default angular.module('app.api', [])
    .factory('UserService', UserService)
    .name;