/** @ngInject */
function mainRoute($stateProvider: ng.ui.IStateProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            abstract: true,
            templateUrl: 'app/main/templates/main.html'
        });
}

export {mainRoute}
