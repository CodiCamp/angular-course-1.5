import template from './footer.tpl.html';

footer.$inject = [];

export default function footer() {
    var directive = {
        restrict: 'E',
        template: template,
        link: link
    };

    return directive;

    function link() {}
}