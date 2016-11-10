import template from './confirm.modal.tpl.html';
import ConfirmModalController from './confirm.modal.controller';
confirmModal.$inject = [];

export default function confirmModal() {
    var directive = {
        restrict: 'E',
        template: template,
        controller: ConfirmModalController,

        link (scope, element, attrs) {

        },

        scope: {
            show: '=',
            title: '@',
            action: '&',
            item: '='
        }

    };

    return directive;
}