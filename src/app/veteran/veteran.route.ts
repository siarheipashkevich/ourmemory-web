import {VeteranFactory} from './veteran.factory';

/** @ngInject */
function veteranRoute(
    $stateProvider: ng.ui.IStateProvider,
    AUTH_ROLES: any
) {
    $stateProvider
        .state('main.veterans', {
            url: 'veterans',
            templateUrl: 'app/veteran/templates/veteran.html',
            controller: 'VeteranController',
            controllerAs: 'vm',
            data: {
                allow: [AUTH_ROLES.all]
            }
        })
        .state('main.veterans.detail', {
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
                    size: 'lg',
                    animation: true,
                    resolve: {
                        /** @ngInject */
                        veteran: async (VeteranFactory: VeteranFactory) => {
                            try {
                                let response = await VeteranFactory.getVeteran($stateParams.id);
                                return response.data;
                            } catch (error) {
                                console.log(error);
                            }
                        }
                    }
                }).result.finally(() => {
                    $state.go('^');
                });
            }
        });
}

export {
    veteranRoute
}
