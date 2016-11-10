import 'angular';
import UserService from './user.service';
import BoardsService from './boards.service';
import loginInterceptor from './login.interceptor.service';
import Translations from './translations.service';
import SessionService from './session.service';

export default angular.module('app.api', [])
    .factory('UserService', UserService)
    .factory('BoardsService', BoardsService)
    .factory('loginInterceptor', loginInterceptor)
    .factory('Translations',Translations)
    .service('SessionService', SessionService)
    .name;