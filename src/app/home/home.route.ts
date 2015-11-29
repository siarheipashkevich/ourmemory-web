/** @ngInject */
function homeRoute($stateProvider: angular.ui.IStateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/home/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        });
}

export {
    homeRoute
}
