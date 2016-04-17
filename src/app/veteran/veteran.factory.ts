import veteransFixture from './fixtures/veterans';

class VeteranFactory {
    private link: string;

    constructor(
        private $http: ng.IHttpService,
        private $q: ng.IQService,
        private CONSTANTS: any
    ) {
        this.link = CONSTANTS.API_URL + 'veteran';
    }

    getVeteran(id: number): ng.IPromise<any> {
        if (this.CONSTANTS.SERVER_IS_ENABLED) {
            return this.$http.get(this.link + `/${id}`);
        } else {
            return this.$q((resolve: any) => resolve({
                data: veteransFixture[id - 1]
            }));
        }
    }

    getVeterans(params: any): ng.IPromise<any> {
        if (this.CONSTANTS.SERVER_IS_ENABLED) {
            return this.$http.get(this.link, {params}).then((response: any) => response.data);
        } else {
            return this.$q((resolve: any) => resolve({
                items: veteransFixture,
                totalCount: 10
            }));
        }
    }

    saveVeteran(veteran: any) {
        if (veteran.id) {
            return this.$http.put(this.link, veteran);
        } else {
            return this.$http.post(this.link, veteran);
        }
    }

    deleteVeteran(id: number) {
        return this.$http.delete(this.link + `/${id}`);
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

export {VeteranFactory, getInstanceVeteranFactory}
