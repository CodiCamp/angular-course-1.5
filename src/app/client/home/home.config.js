/***
 * Configure Home module
 **/
import template from './home.tpl.html';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.client.home", {
        url: "/",
        views: {
            client: {template: template}
        }
    });
}