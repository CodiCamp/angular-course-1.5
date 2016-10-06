import 'angular';

import headerAdmin from './header/header.admin.directive';

var commonDepends = [];

export default angular
                    .module('admin.directives', commonDepends)
                    .directive('headerAdmin', headerAdmin)
                    .name;