import {Veteran} from '../models/veteran';

class VeteranDetailController {
    /** @ngInject */
    constructor(
        private veteran: Veteran,
        private $scope: any
    ) {}

    closeModal() {
        this.$scope.$close();
    }
}

export {
    VeteranDetailController
}
