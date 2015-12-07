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
        })
        .state('home.veterans.detail', {
            url: '/{id:int}',
            data: {
                allow: [AUTH_ROLES.all]
            },
            /** @ngInject */
            onEnter: ($uibModal: any, $stateParams: any, $state: ng.ui.IStateService) => {
                $uibModal.open({
                    templateUrl: 'app/veteran/templates/modals/detail.html',
                    controller: 'VeteranDetailController',
                    controllerAs: 'vm',
                    resolve: {
                        /** @ngInject */
                        veteran: (VeteranFactory: any) => {
                            return {id: 1, name: 'Александр Иванович СЛОБОДА'}
                        }
                    },
                    animation: true,
                    size: 'lg',
                }).result.finally(() => {
                    $state.go('^');
                });
            }
        });
}

export {
    veteranRoute
}
