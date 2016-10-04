import 'angular';

import headerClient from './header/header.client.directive';
import headerAdmin from './header/header.admin.directive';

var commonDepends = [];

export default angular
                    .module('common.directives', commonDepends)
                    .directive('headerClient', headerClient)
                    .directive('headerAdmin', headerAdmin)
                    .name;