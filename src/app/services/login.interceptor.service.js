
loginInterceptor.$inject = ['SessionService'];

    /* @ngInject */
    function loginInterceptor(SessionService) {
        return {
            request: function (config) {

                return config;
            },

            response: function (response) {

                SessionService.setSession(true);

                return {
                    data: {
                        result: response.data,
                        status: response.status
                    }
                };
            },

            responseError: function (response) {

                SessionService.setSession(true);
                
                console.log(response);
                return response;
            }
        };
    }



export default loginInterceptor;











