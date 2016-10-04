/***
 * Configure Home module
 **/
import template from './board.tpl.html';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.admin.board", {
        url: "/board",
        views: {
            admin: {template: template}
        }
    });
}