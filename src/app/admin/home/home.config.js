/***
 * Configure Home module
 **/

import template from './home.tpl.html';
import HomeController from  './home.controller';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.admin.home", {
        url: "/boards",
        views: {
            admin: {
                template: template,
                controllerAs: 'vm',
                controller: HomeController
            }
        },
        params: {
            requeireLogin: true
        }
    });
}