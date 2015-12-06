/** @ngInject */
function veteranRoute(
    $stateProvider: ng.ui.IStateProvider,
    AUTH_ROLES: any
) {
    $stateProvider
        .state('home.veterans', {
            url: 'veterans',
            templateUrl: 'app/veteran/templates/veteran.html',
            controller: 'VeteranController',
            controllerAs: 'vm',
            data: {
                allow: [AUTH_ROLES.all]
            },
            resolve: {
                /** @ngInject */
                veterans: (VeteranFactory: any) => {
                    return VeteranFactory.getVeteran().then((response: any) => {
                        return response.data;
                    }).catch((error:any) => {
                        console.log(error);

                    });
                }
            }
        });
}

export {
    veteranRoute
}
