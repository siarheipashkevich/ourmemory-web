/** @ngInject */
function authRoute($stateProvider: ng.ui.IStateProvider, AUTH_ROLES: any) {
    $stateProvider
        .state('home.login', {
            url: 'login',
            templateUrl: 'app/auth/templates/login.html',
            controller: 'AuthController',
            controllerAs: 'vm',
            data: {
                allow: [AUTH_ROLES.all]
            }
        })
        .state('home.register', {
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
