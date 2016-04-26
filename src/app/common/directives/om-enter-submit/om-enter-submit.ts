/** @ngInject */
function omEnterSubmit(): ng.IDirective {
    return {
        restrict: 'A',
        link: (scope: ng.IScope, elem: any, attrs: any) => {

            elem.bind('keydown keypress', (event: any) => {
                let code = event.keyCode || event.which;

                if (code === 13) {
                    if (!event.shiftKey) {
                        event.preventDefault();
                        scope.$apply(attrs.omEnterSubmit);
                    }
                }
            });
        }
    };
}

export {omEnterSubmit}
