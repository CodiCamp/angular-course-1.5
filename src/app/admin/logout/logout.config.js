/***
 * Configure Home module
 **/

import template from './logout.tpl.html';
import LogoutController from  './logout.controller';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.admin.logout", {
        url: "/logout",
        views: {
            admin: {
                template: template,
                controllerAs: 'vm',
                controller: LogoutController
            }
        },
        params: {
            requeireLogin: true
        }
    });
}