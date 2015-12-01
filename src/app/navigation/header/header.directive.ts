/** @ngInject */
function headerDirective(): ng.IDirective {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'app/navigation/header/templates/header.html',
        controller: 'HeaderController',
        controllerAs: 'vm'
    };
}

export {
    headerDirective
}
