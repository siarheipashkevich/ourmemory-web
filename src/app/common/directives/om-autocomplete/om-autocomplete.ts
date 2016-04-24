/** @ngInject */
function omAutocomplete(google: any): ng.IDirective {
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            latitude: '=?',
            longitude: '=?'
        },
        link: (scope: any, element: ng.IRootElementService, attrs: any, model: ng.INgModelController) => {
            let options = {},
                autocomplete = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(autocomplete, 'place_changed', () => {
                let place = autocomplete.getPlace();

                if (!place.geometry) {
                    scope.$apply(() => {
                        model.$setValidity('places', false);

                        scope.latitude = scope.longitude = 0;
                    });

                    return;
                }

                if (angular.isDefined(attrs.latitude)) {
                    scope.latitude = place.geometry.location.lat();
                }

                if (angular.isDefined(attrs.longitude)) {
                    scope.longitude = place.geometry.location.lng();
                }

                scope.$apply(() => {
                    model.$setViewValue(element.val());
                    model.$setValidity('places', true);
                });
            });

            if (angular.isDefined(attrs.latitude)) {
                scope.$watch('latitude', (newValue: number, oldValue: number) => {
                    if (newValue && !oldValue) {
                        model.$setValidity('places', true);
                    }
                });
            }

            scope.$on('$destroy', () => {
                google.maps.event.clearInstanceListeners(element[0]);
            });
        }
    };
}

export {omAutocomplete}
