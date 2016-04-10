/** @ngInject */
function resizeDirective($window: ng.IWindowService) {
    return {
        restrict: 'A',
        link: linkFunction
    };

    function linkFunction(scope: any, element: any) {
        function resizeHandler() {
            var header = document.getElementById('header');

            if (header) {
                element.windowHeight = $window.innerHeight - header.clientHeight;
            } else {
                element.windowHeight = $window.innerHeight - 61;
            }

            angular.element(element).height(element.windowHeight);
        }

        resizeHandler();

        angular.element($window).bind('resize', function () {
            resizeHandler();

            scope.$apply();
        });

        scope.$on('$destroy', function () {
            angular.element($window).unbind('resize');
        });
    }
}

export {
    resizeDirective
}
