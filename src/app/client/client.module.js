import 'angular';

import config from './client.config';

import homeModule from './home/home.module';
import loginModule from './login/login.module';
import registerModule from './register/register.module';

import clientDirectives from './directives/client.directives';

let clientDependencies = [
    clientDirectives,
    homeModule,
    loginModule,
    registerModule
];

export default angular.module('app.client', clientDependencies)
    .config(config).name;