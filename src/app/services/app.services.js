import 'angular';
import UserService from './user.service';
import BoardsService from './boards.service';
import loginInterceptor from './login.interceptor.service';

export default angular.module('app.api', [])
    .factory('UserService', UserService)
    .factory('BoardsService', BoardsService)
    .factory('loginInterceptor', loginInterceptor)
    .name;