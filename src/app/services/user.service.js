/***
 * User service
 * + log in user
 * + register newuser
 **/

UserService.$inject = ['$resource'];

function UserService ($resource){

    var URL = 'http://57e0fb4e4ed1d8110064d494.mockapi.io/api/v1/:action';
    var defaultParams = {
        action: '@action'
    };

    return $resource(URL, defaultParams, {

        getAllUsers: {
            method: 'GET',
            params: {
                action: 'users'
            },
            isArray: false
        },
        registerUser: {
            method: 'POST',
            params: {
                action: 'users'
            },
            isArray: false
        }
    });
}

export default UserService;