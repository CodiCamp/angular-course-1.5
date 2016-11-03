
loginInterceptor.$inject = [];

    /* @ngInject */
    function loginInterceptor() {
        return {
            request: function (config) {

                return config;
            },
            response: function (response) {

                return {
                    data: {
                        result: response.data,
                        status: response.status
                    }
                };
            },
            responseError: function (response) {
                console.log(response);
                return response;
            }
        };
    }



export default loginInterceptor;











