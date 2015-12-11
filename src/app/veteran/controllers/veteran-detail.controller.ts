class VeteranDetailController {
    /** @ngInject */
    constructor(
        private veteran: any,
        private $scope: any,
        private moment: moment.MomentStatic
    ) {}

    closeModal() {
        this.$scope.$close();
    }
}

export {
    VeteranDetailController
}
