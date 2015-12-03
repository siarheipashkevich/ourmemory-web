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
            }
        })
        .state('home.veterans.create', {
            url: '/create',
            /** @ngInject */
            onEnter: ($modal: any, $state: ng.ui.IStateService) => {
                var modalInstance = $modal.open({
                    templateUrl: 'app/veteran/templates/modals/create.html',
                    /** @ngInject */
                    controller: function ($modalInstance) {
                        this.createVeteran = () => {
                            $modalInstance.close(this.veteran);
                        };

                        this.closeModal = () => {
                            $modalInstance.dismiss();
                        };
                    },
                    animation: true,
                    controllerAs: 'vm',
                    size: 'md',
                    backdrop: 'static'
                });

                modalInstance.result.then(function (veteran) {
                    console.log(veteran);
                }, function () {
                    console.log('Modal dismissed at: ' + new Date());
                }).finally(function () {
                    $state.go('^');
                })
            },
            data: {
                allow: [AUTH_ROLES.all]
            }
        });
}

export {
    veteranRoute
}
