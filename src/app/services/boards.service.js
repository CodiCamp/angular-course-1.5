export default BoardsService;
BoardsService.$inject = ['$resource','API_URL'];

/* @ngInject */
function BoardsService($resource, API_URL) {

    var URL = API_URL + 'users/:id/:action';
    var defaultParams = {
        id: '@id',
        action: '@action'
    };

    ////////////////

    return $resource(URL, defaultParams, {

        getBoards: {
            method: 'GET',
            params: {
                action: 'boards'
            },
            isArray: false
        }
    });
}




