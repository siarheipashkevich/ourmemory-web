/** @ngInject */
function profileRoute(
    $stateProvider: ng.ui.IStateProvider,
    AUTH_ROLES: any
) {
    $stateProvider
        .state('main.profile', {
            url: 'profile',
            templateUrl: 'app/profile/templates/profile.html',
            controller: 'ProfileController',
            controllerAs: 'vm',
            data: {
                allow: [AUTH_ROLES.all]
            }
        });
}

export {
    profileRoute
}
