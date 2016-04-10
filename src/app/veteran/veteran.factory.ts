import veteransFixture from './fixtures/veterans';

class VeteranFactory {
    constructor(
        private $http: ng.IHttpService,
        private $q: ng.IQService,
        private CONSTANTS: any
    ) {}

    getVeteran(id: number): ng.IPromise<any> {
        if (this.CONSTANTS.SERVER_IS_ENABLED) {
            return this.$http.get(this.CONSTANTS.API_URL + 'veteran/' + id);
        } else {
            return this.$q((resolve: any) => resolve({
                data: veteransFixture[id - 1]
            }));
        }
    }

    getVeterans(params?: any): ng.IPromise<any> {
        var uri: string = '';

        if (angular.isDefined(params) && angular.isObject(params)) {
            if (angular.isDefined(params.page)) {
                uri += '/' + params.page;
            }

            if (angular.isDefined(params.size)) {
                uri += '/' + params.size;
            }
        }

        if (this.CONSTANTS.SERVER_IS_ENABLED) {
            return this.$http.get(this.CONSTANTS.API_URL + 'veteran' + uri);
        } else {
            return this.$q((resolve: any) => resolve({
                data: {
                    items: veteransFixture,
                    totalCount: 10
                }
            }));
        }

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
    $q: ng.IQService,
    CONSTANTS: any
) {
    return new VeteranFactory($http, $q, CONSTANTS);
}

export {
    VeteranFactory,
    getInstanceVeteranFactory
}
