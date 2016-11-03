export default BoardsService;
BoardsService.$inject = ['$resource','API_URL'];

/* @ngInject */
function BoardsService($resource, API_URL) {

    var URL = API_URL + 'users/:userId/:action/:boardId/:createCard';
    var defaultParams = {
        userId: '@userId',
        action: '@action',
        boardId: '@boardId',
        createCard: '@createCard'
    };

    ////////////////

    return $resource(URL, defaultParams, {

        getBoards: {
            method: 'GET',
            params: {
                action: 'boards'
            },
            isArray: false
        },
        
        deleteBoard: {
            method: 'DELETE',
            params: {
                action: 'boards'
            },
            isArray: false
        },

        createBoard: {
            method: 'POST',
            params: {
                action: 'boards'
            },
            isArray: false
        },

        getBoard: {
            method: 'GET',
            params: {
                action: 'boards'
            },
            isArray: false
        },

        /***
         * creating new cards for board
         * @param {Number} userId
         * @param {Number} boardId
         */
        createCard: {
            method: 'POST',
            params: {
                action: 'boards',
                createCard: 'cards'
            },
            isArray: false
        }
    });
}




