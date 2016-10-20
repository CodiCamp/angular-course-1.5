import 'angular';
import UserService from './user.service';
import loginInterceptor from './login.interceptor.service';

export default angular.module('app.api', [])
    .factory('UserService', UserService)
    .factory('loginInterceptor', loginInterceptor)
    .name;