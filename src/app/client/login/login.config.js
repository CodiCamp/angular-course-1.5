/***
 * Configure Home module
 **/
import template from './login.tpl.html';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.client.login", {
        url: "/login",
        views: {
            client: {template: template}
        },
        params: {
            requeireLogin: false
        }
    });
}