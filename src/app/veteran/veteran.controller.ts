import { VeteranFactory } from './veteran.factory';

class VeteranController {
    /** @ngInject */
    constructor(
        private VeteranFactory: VeteranFactory,
        private $uibModal: any,
        private veterans: any
    ) {}

    showModalCreateVeteran() {
        this.$uibModal.open({
            templateUrl: 'app/veteran/templates/modals/create.html',
            controller: 'VeteranModalController',
            controllerAs: 'vm',
            animation: true,
            backdrop: 'static'
        }).result.then((veteran: any) => {
            console.log(veteran);
        }, () => {
            console.log('Modal dismissed at: ' + new Date());
        });
    }
}

export {
    VeteranController
}
