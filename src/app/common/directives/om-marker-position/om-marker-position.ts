/** @ngInject */
function omMarkerPosition(google: any, CONSTANTS: any): ng.IDirective {
    return {
        restrict: 'EA',
        templateUrl: 'app/common/directives/om-marker-position/om-marker-position.html',
        scope: {
            latitude: '=',
            longitude: '='
        },
        link: (scope: any, element: ng.IRootElementService, attrs: any, model: ng.INgModelController) => {
            if (angular.isUndefined(scope.latitude) || angular.isUndefined(scope.longitude)) {
                scope.latitude = 53.906165;
                scope.longitude = 27.555991;
            }

            scope.$watchGroup(['latitude', 'longitude'], (newValues: number, oldValues: number) => {
                if ((newValues[0] && newValues[0] !== oldValues[0])
                    && (newValues[1] && newValues[1] !== oldValues[1])
                ) {
                    scope.gMap.map.center = {
                        latitude: newValues[0],
                        longitude: newValues[1]
                    };

                    scope.gMap.marker.coords = {
                        latitude: newValues[0],
                        longitude: newValues[1]
                    };
                }
            });

            scope.gMap = {
                map: {
                    center: {
                        latitude: scope.latitude,
                        longitude: scope.longitude
                    },
                    zoom: 15,
                    options: {
                        scrollwheel: true,
                        disableDefaultUI: true,
                        styles: [{
                            stylers: [{
                                hue: '#cccccc'
                            }, {
                                saturation: -100
                            }]
                        }, {
                            featureType: 'road',
                            elementType: 'geometry',
                            stylers: [{
                                lightness: 100
                            }, {
                                visibility: 'simplified'
                            }]
                        }, {
                            featureType: 'road',
                            elementType: 'labels',
                            stylers: [{
                                visibility: 'on'
                            }]
                        }, {
                            featureType: 'poi',
                            stylers: [{
                                visibility: 'off'
                            }]
                        }]
                    },
                    events: {
                        click: (map: any, eventName: any, event: any) => {
                            map.setCenter(event[0].latLng);

                            scope.gMap.marker.coords = {
                                latitude: event[0].latLng.lat(),
                                longitude: event[0].latLng.lng()
                            };

                            scope.latitude = event[0].latLng.lat();
                            scope.longitude = event[0].latLng.lng();
                        }
                    }
                },
                marker: {
                    id: 0,
                    coords: {
                        latitude: scope.latitude,
                        longitude: scope.longitude
                    },
                    options: {
                        draggable: true,
                        animation: google.maps.Animation.DROP,
                        icon: {
                            url: CONSTANTS.ICON_NEW_MARKER,
                            scaledSize: new google.maps.Size(32, 32)
                        }
                    },
                    events: {
                        dragend: (marker: any) => {
                            scope.latitude = marker.getPosition().lat();
                            scope.longitude = marker.getPosition().lng();
                        }
                    }
                }
            };


            scope.$on('$destroy', () => {
                console.log('$destroy');
            });
        }
    };
}

export {omMarkerPosition}
