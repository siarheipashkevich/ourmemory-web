/** @ngInject */
function authRoute($stateProvider: angular.ui.IStateProvider) {
    $stateProvider
        .state('home.login', {
            url: 'login',
            templateUrl: 'app/auth/templates/login.html',
            controller: 'AuthController',
            controllerAs: 'vm'
        })
        .state('home.register', {
            url: 'register',
            templateUrl: 'app/auth/templates/register.html',
            controller: 'AuthController',
            controllerAs: 'vm'
        });
}

export {
    authRoute
}
