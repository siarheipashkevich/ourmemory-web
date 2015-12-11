class VeteranFactory {
    constructor(
        private $http: ng.IHttpService,
        private CONSTANTS: any
    ) {}

    getVeteran(id: number): ng.IPromise<any> {
        return this.$http.get(this.CONSTANTS.API_URL + 'veteran/' + id);
    }

    getVeterans(params?: any) {
        var uri: string = '';

        if (angular.isDefined(params) && angular.isObject(params)) {
            if (angular.isDefined(params.page)) {
                uri += '/' + params.page;
            }

            if (angular.isDefined(params.size)) {
                uri += '/' + params.size;
            }
        }

        return this.$http.get(this.CONSTANTS.API_URL + 'veteran' + uri);
    }

    saveVeteran(veteran: any) {
        if (veteran.id) {
            return this.$http.put(this.CONSTANTS.API_URL + 'veteran', veteran);
        } else {
            return this.$http.post(this.CONSTANTS.API_URL + 'veteran', veteran);
        }
    }

    deleteVeteran(id: number) {
        return this.$http.delete(this.CONSTANTS.API_URL + 'veteran/' + id);
    }
}

/** @ngInject */
function getInstanceVeteranFactory(
    $http: ng.IHttpService,
    CONSTANTS: any
) {
    return new VeteranFactory($http, CONSTANTS);
}

export {
    VeteranFactory,
    getInstanceVeteranFactory
}
