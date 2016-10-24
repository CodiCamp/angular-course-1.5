import 'angular';
import ProfileService from './profile.provider.js';

export default angular.module('app.providers', [])
    .provider('ProfileService', ProfileService).name;