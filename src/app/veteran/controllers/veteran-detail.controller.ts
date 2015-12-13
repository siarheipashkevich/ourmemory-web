class VeteranDetailController {
    /** @ngInject */
    constructor(
        private veteran: any,
        private $scope: any
    ) {}

    closeModal() {
        this.$scope.$close();
    }
}

export {
    VeteranDetailController
}
