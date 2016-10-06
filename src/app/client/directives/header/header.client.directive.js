import template from './header.client.tpl.html';

headerClient.$inject = [];

export default function headerClient() {
    var directive = {
        restrict: 'E',
        template: template,
        link: link
    };

    return directive;

    function link() {}
}