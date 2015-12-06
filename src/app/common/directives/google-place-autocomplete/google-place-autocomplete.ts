/** @ngInject */
function googlePlaceAutocomplete(google: any): ng.IDirective {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'app/common/directives/google-place-autocomplete/google-place-autocomplete.html',
        scope: {
            location: '=',
            latitude: '=',
            longitude: '=',
            title: '@',
            types: '@'
        },
        link: (scope: any, element: any, attrs: any) => {
            var options: any = {},
                autocomplete,
                googlePlaceAutocomplete: any = angular.element('#googlePlaceAutocomplete');

            autocomplete = new google.maps.places.Autocomplete(googlePlaceAutocomplete[0], options);

            google.maps.event.addListener(autocomplete, 'place_changed', () => {
                var place = autocomplete.getPlace();

                if (!place.geometry) {
                    window.alert('Autocomplete\'s returned place contains no geometry');
                    return;
                }

                if (angular.isDefined(attrs.latitude)) {
                    scope.latitude = place.geometry.location.lat();
                }

                if (angular.isDefined(attrs.longitude)) {
                    scope.longitude = place.geometry.location.lng();
                }

                scope.location = googlePlaceAutocomplete.val();

                scope.$apply();
            });
        }
    };
}

export {
    googlePlaceAutocomplete
}
