import 'angular';
import config from './home.config';
import HomeController from './home.controller';

export default angular.module('client.home', [])
    .controller('HomeController', HomeController)
    .config(config).name;