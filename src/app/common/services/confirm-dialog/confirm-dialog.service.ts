interface IConfirmDialog {
    confirm(params: any): any;
}

class ConfirmDialog implements IConfirmDialog{
    /** @ngInject */
    constructor(
        private $uibModal: any
    ) {}

    confirm(params: any) {
        return this.$uibModal.open({
            templateUrl: 'app/common/templates/confirm-dialog.html',
            animation: true,
            size: 'md',
            /** @ngInject */
            controller: ($scope: any, params: any) => {
                $scope.params = params;
            },
            resolve: {
                params: () => {
                    return params;
                }
            }
        }).result;
    }
}

export {
    IConfirmDialog,
    ConfirmDialog
}
