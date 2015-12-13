import { VeteranFactory } from './veteran.factory';

/** @ngInject */
function veteranRoute(
    $stateProvider: ng.ui.IStateProvider,
    AUTH_ROLES: any
) {
    $stateProvider
        .state('root', {
            url: '/',
            abstract: true,
            templateUrl: 'app/common/templates/root.html'
        })
        .state('root.veterans', {
            url: 'veterans',
            templateUrl: 'app/veteran/templates/veteran.html',
            controller: 'VeteranController',
            controllerAs: 'vm',
            data: {
                allow: [AUTH_ROLES.all]
            },
            resolve: {
                /** @ngInject */
                veteransData: (VeteranFactory: any, CONSTANTS: any) => {
                    var options = {
                        page: 0,
                        size: CONSTANTS.PAGINATION.MAX_ITEMS_TO_PAGE
                    };

                    return VeteranFactory.getVeterans(options).then((response: any) => {
                        return response.data;
                    }).catch((error: any) => {
                        console.log(error);
                    });
                }
            }
        })
        .state('root.veterans.detail', {
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
                        veteran: (VeteranFactory: VeteranFactory) => {
                            return VeteranFactory.getVeteran($stateParams.id).then(
                                (response: any) => {
                                    return response.data;
                                },
                                (error: any) => {
                                    console.log(error);
                                }
                            );
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
