/***
 * Configure Home module
 **/
import template from './board.tpl.html';
import BoardController from './board.controller';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.admin.board", {
        url: "/board/:id",
        views: {
            admin: {
                template: template,
                controller: BoardController,
                controllerAs: 'vm'
            }
        },
        params: {
            board: null,
            requeireLogin: true
        }
    });
}