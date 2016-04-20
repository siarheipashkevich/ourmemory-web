interface IGoogleMapWindowScope extends ng.IScope {
    parameter: any;
}

class GoogleMapWindowController {
    /** @ngInject */
    constructor(private $scope: IGoogleMapWindowScope) {
        $scope.$on('$destroy', () => {
            console.log('DESTROY');
        });
    }

    close() {
        this.$scope.parameter.show = false;
        this.$scope.$emit('destroy');
    }
}

export {GoogleMapWindowController}
