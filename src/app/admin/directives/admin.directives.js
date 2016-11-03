import 'angular';

import headerAdmin from './header/header.admin.directive';
import confirmModal from './modals/confirm.modal.directive';

var commonDepends = [];

export default angular
                    .module('admin.directives', commonDepends)
                    .directive('headerAdmin', headerAdmin)
                    .directive('confirmModal', confirmModal)
                    .name;