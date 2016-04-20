interface IMapService {
    getSettingsGoogleMaps(): any;
}

class MapService implements IMapService {
    /** @ngInject */
    constructor(
        private google: any,
        private CONSTANTS: any
    ) {}

    getSettingsGoogleMaps(): any {
        let gMap = {
            map: {
                events: {
                    dragend: (map: any) => {
                        console.log(map.getBounds());
                    }
                },
                center: {
                    latitude: 53.906165,
                    longitude: 27.555991
                },
                zoom: 4,
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
                }
            },
            window: {
                veteran: {},
                position: {},
                show: false,
                style: this.getWindowOptionsToMarker()
            },
            marker: {
                options: this.getMarkerOptions(),
                events: {
                    click: (marker: any, eventName: any, veteran: any) => {
                        gMap.window.veteran = veteran;
                        gMap.window.position = veteran.marker.position;

                        gMap.window.show = true;
                    }
                }
            }
        };

        return gMap;
    }

    private getMarkerOptions(): any {
        return {
            draggable: false,
            animation: this.google.maps.Animation.DROP,
            icon: {
                url: this.CONSTANTS.ICON_DEFAULT_MARKER,
                scaledSize: new this.google.maps.Size(32, 32)
            }
        };
    }

    private getWindowOptionsToMarker(): any {
        return {
            template: 'app/common/templates/google-map-window.html',
            options: {
                boxClass: 'test',
                disableAutoPan: false,
                maxWidth: 202,
                pixelOffset: new this.google.maps.Size(-101, -285),
                zIndex: null,
                boxStyle: {
                    background: 'url(\'assets/images/infobox-bg.png\') no-repeat',
                    opacity: 1,
                    width: '202px',
                    height: '245px',
                    '-webkit-animation': 'fadein .3s',
                    'animation': 'fadein .3s'
                },
                closeBoxMargin: '28px 26px 0px 0px',
                closeBoxURL: '',
                infoBoxClearance: new this.google.maps.Size(1, 1),
                pane: 'floatPane',
                enableEventPropagation: false
            }
        };
    }
}

export {IMapService, MapService}
