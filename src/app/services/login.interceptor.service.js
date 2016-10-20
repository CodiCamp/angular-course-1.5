
loginInterceptor.$inject = [];

    /* @ngInject */
    function loginInterceptor() {
        return {
            request: function (config) {
                console.log(config);
                return config;
            },
            response: function (response) {
                console.log(response);
                var transformResponse = {
                    data: {
                        result: response.data,
                        status: response.status
                    }
                };
                console.log(transformResponse);
                return transformResponse;
            },
            responseError: function (response) {
                console.log(response);
                return response;
            }
        };
    }



export default loginInterceptor;











