import template from './header.admin.tpl.html';

headerAdmin.$inject = [];

export default function headerAdmin() {
    var directive = {
        restrict: 'E',
        template: template,

        link (scope, element, attr) {

           
        }
    };

    return directive;
}