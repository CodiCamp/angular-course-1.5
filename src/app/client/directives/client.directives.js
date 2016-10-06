import 'angular';

import headerClient from './header/header.client.directive';

var clientDepends = [];

export default angular
                    .module('client.directives', clientDepends)
                    .directive('headerClient', headerClient)
                    .name;