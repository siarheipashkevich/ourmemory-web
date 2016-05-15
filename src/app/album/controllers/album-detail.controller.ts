class AlbumDetailController {
    errors: any;
    submitted: boolean;
    sendingData: boolean = false;

    /** @ngInject */
    constructor(
        private $rootScope: any,
        private $timeout: ng.ITimeoutService,
        private $translate: ng.translate.ITranslateService
    ) {
        angular.element('body').addClass('no-hidden no-touch');
        angular.element('body').removeClass('notransition');
    }
}

export {AlbumDetailController}
