/***
 * Configure Home module
 **/

import template from './home.tpl.html';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.admin.home", {
        url: "/boards",
        views: {
            admin: {template: template}
        }
    });
}