class HomeController {
    /** @ngInject */
    constructor(
        private $window: any,
        private $document: any
    ) {
        angular.element(document.getElementsByTagName('body')).removeClass('notransition');

        if (!(('ontouchstart' in $window) || $window.DocumentTouch)) {
            angular.element(document.getElementsByTagName('body')).addClass('no-touch');
        }

        angular.element(document.getElementsByTagName('body')).addClass('no-hidden');
    }
}

export {
    HomeController
}
