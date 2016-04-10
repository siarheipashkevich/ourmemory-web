class HomeController {
    /** @ngInject */
    constructor(private $window: any,
                private $document: any) {
        angular.element('body').removeClass('notransition');

        if (!(('ontouchstart' in $window) || $window.DocumentTouch)) {
            angular.element('body').addClass('no-touch');
        }

        angular.element('body').addClass('no-hidden');
    }
}

export {
    HomeController
}
