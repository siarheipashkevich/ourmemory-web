class GoogleMapsApiFactory {
    private link: string = 'https://maps.googleapis.com/maps/api/';

    constructor(
        private $http: ng.IHttpService,
        private $log: ng.ILogService,
        private $q: ng.IQService,
        private CONSTANTS: any
    ) {}

    geocode(params: any) {
        angular.extend(params, {
            key: this.CONSTANTS.GOOGLE_API_KEY,
            result_type: 'street_address|locality|sublocality|political|country'
        });

        return this.$http.get(this.link + 'geocode/json', {params}).then((response: any) => {
            if (response.data.status === 'OK') {
                return response.data.results[0].formatted_address;
            } else {
                this.$q.reject(response.data);
            }
        });
    }
}

/** @ngInject */
function getInstanceGoogleMapsApiFactory(
    $http: ng.IHttpService,
    $log: ng.ILogService,
    $q: ng.IQService,
    CONSTANTS: any
) {
    return new GoogleMapsApiFactory($http, $log, $q, CONSTANTS);
}

export {GoogleMapsApiFactory, getInstanceGoogleMapsApiFactory}
