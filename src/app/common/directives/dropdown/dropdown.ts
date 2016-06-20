/** @ngInject */
function dropdown(): ng.IDirective {
    return {
        restrict: 'E',
        templateUrl: 'app/common/directives/dropdown/dropdown.html',
        scope: {
            placeholder: '@',
            list: '=',
            selected: '=',
            property: '@',
            classes: '@'
        },
        link: (scope: any) => {
            scope.isPlaceholder = true;

            scope.select = (item: any) => {
                scope.isPlaceholder = false;
                scope.selected = item;
                if (scope.onChange !== undefined) {
                    scope.onChange(item);
                }
            };

            scope.isSelected = (item: any) => {
                return scope.selected && item[scope.property] === scope.selected[scope.property];
            };

            scope.$watch('selected', () => {
                scope.isPlaceholder = scope.selected && scope.selected[scope.property] === undefined;
                scope.display = scope.selected && scope.selected[scope.property];
            });
        }
    };
}

export {dropdown}
