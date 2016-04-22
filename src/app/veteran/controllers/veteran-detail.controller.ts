import {VeteranModel} from '../models/veteran';

class VeteranDetailController {
    /** @ngInject */
    constructor(
        private veteran: VeteranModel,
        private $scope: any
    ) {}

    closeModal() {
        this.$scope.$close();
    }
}

export {
    VeteranDetailController
}
