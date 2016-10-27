
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
}


