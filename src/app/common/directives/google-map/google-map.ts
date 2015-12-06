/** @ngInject */
function googleMap(google: any, $window: ng.IWindowService): ng.IDirective {
    return {
        restrict: 'EA',
        link: (scope: any) => {
            var mapCanvas = document.getElementById('mapView');

            var mapOptions = {
                center: new google.maps.LatLng(53.784647, 28.114698),
                zoom: 6,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            new google.maps.Map(mapCanvas, mapOptions);
        }
    };
}

export {
    googleMap
}
