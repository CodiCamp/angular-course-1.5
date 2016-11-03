
export default BoardController;

BoardController.$inject = ['$state', 'BoardsService','ProfileService'];

/* @ngInject */
function BoardController($state, BoardsService, ProfileService) {

    var vm   = this;
    vm.title = 'Board Controller';
    vm.board = null;

    let userId = ProfileService.getProfile().id;

    activate();

    ////////////////

    function activate() {
        
        if($state.params.board){
            
            vm.board = $state.params.board;
        } else {

            if($state.params.id) {

                BoardsService.getBoard({
                    userId : userId ,
                    boardId: $state.params.id
                },successGetBoard,failGetBoard);

            } else {

                $state.go('app.admin.home');
            }
        }
    }

    function successGetBoard(response){

        vm.board = response.result;
    }
    function failGetBoard(response){

        // TODO : show error
    }

    vm.createCard = function () {

        var title = prompt("Enter card name: ");

        var newCard = {
            name: title,
            userId: userId,
            boardId: vm.board.id
        };

        BoardsService.createCard(newCard,
            successCreateCard, failCreateCard
        )
    };

    function successCreateCard(response){

        vm.board.cards.push(response.result);
    }
    function failCreateCard(response){

        // TODO : show error
    }
}


