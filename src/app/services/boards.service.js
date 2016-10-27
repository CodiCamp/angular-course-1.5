export default BoardsService;
BoardsService.$inject = ['$resource','API_URL'];

/* @ngInject */
function BoardsService($resource, API_URL) {

    var URL = API_URL + 'users/:userId/:action/:boardId';
    var defaultParams = {
        userId: '@userId',
        action: '@action',
        boardId: '@boardId'
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

        getBoard: {
            method: 'GET',
            params: {
                action: 'boards'
            },
            isArray: false
        }
    });
}




