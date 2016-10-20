/***
 * Configure Home module
 **/
import template from './card.tpl.html';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.admin.card", {
        url: "/board/card",
        views: {
            admin: {template: template}
        }
    });
}