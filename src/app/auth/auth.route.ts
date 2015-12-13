/** @ngInject */
function authRoute($stateProvider: ng.ui.IStateProvider, AUTH_ROLES: any) {
    $stateProvider
        .state('root.login', {
            url: 'login',
            templateUrl: 'app/auth/templates/login.html',
            controller: 'AuthController',
            controllerAs: 'vm',
            data: {
                allow: [AUTH_ROLES.all]
            }
        })
        .state('root.register', {
            url: 'register',
            templateUrl: 'app/auth/templates/register.html',
            controller: 'AuthController',
            controllerAs: 'vm',
            data: {
                allow: [AUTH_ROLES.all]
            }
        });
}

export {
    authRoute
}
