/** @ngInject */
function dotDotDot(): ng.IDirective {
    return {
        restrict: 'A',
        scope: {
            text: '='
        },
        link: (scope: any, element: any) => {
            console.log(scope.text);

            element.html(scope.text);
            element.dotdotdot();
        }
    };
}

export {
    dotDotDot
}
