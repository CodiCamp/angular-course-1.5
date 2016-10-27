import _ from 'underscore';

export default HomeController;

HomeController.$inject = ['BoardsService', 'ProfileService'];

/* @ngInject */
function HomeController(BoardsService, ProfileService) {
    var vm   = this;
    vm.title = 'Home Controller';

    vm.boards = [];

    let userId;
    
    init();

    ////////////////

    function init() {
        userId = ProfileService.getProfile().id;
        BoardsService.getBoards({userId: userId}, successGetBoards, failGetBoards);
    }

    vm.deleteBoard = function (board) {
        if(!board.deleting) {
            board.deleting = true;
            BoardsService.deleteBoard({userId: userId, boardId: board.id}, successDeleteBoard.bind(board), failDeleteBoard);
        }
    };

    function successGetBoards(response) {
        vm.boards = response.result;
    }

    function failGetBoards(response) {
        //TODO: Show error
    }

    function successDeleteBoard(response) {

        vm.boards = _.reject(vm.boards, this);
        board.deleting = false;
    }

    function failDeleteBoard(response) {
        //TODO: Show error
        board.deleting = false;
    }
}

