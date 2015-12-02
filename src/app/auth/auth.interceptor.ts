/** @ngInject */
function authInterceptor($injector: any, $log: angular.ILogService) {
    return {
        request: request,
        response: response
    };

    function request(config: any) {
        config.headers = config.headers || {};

        if (localStorage.getItem('access_token')) {
            config.headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken');
        }

        return config;
    }

    function response(response: any) {
        var AuthService = $injector.get('AuthService');

        if (response.status >= 400) {
            $log.error(response);

            AuthService.clearIdentity();
        }

        return response;
    }
}

export {
    authInterceptor
}
