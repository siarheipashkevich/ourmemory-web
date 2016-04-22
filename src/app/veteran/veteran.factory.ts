import veteransFixture from './fixtures/veterans';
import {VeteranModel} from './models/veteran';

class VeteranFactory {
    private link: string;

    constructor(
        private $http: ng.IHttpService,
        private $q: ng.IQService,
        private $timeout: ng.ITimeoutService,
        private CONSTANTS: any
    ) {
        this.link = CONSTANTS.API_URL + 'veteran';
    }

    getVeteran(id: number): ng.IPromise<VeteranModel> {
        if (this.CONSTANTS.SERVER_IS_ENABLED) {
            return this.$http.get(this.link + `/${id}`).then((response: any) => {
                return new VeteranModel(response);
            });
        } else {
            return this.$q((resolve: ng.IQResolveReject<any>) => {
                resolve(new VeteranModel(veteransFixture[id - 1]));
            });
        }
    }

    getVeterans(params: any): ng.IPromise<any> {
        if (this.CONSTANTS.SERVER_IS_ENABLED) {
            return this.$http.get(this.link, {params}).then((response: any) => response.data);
        } else {
            return this.$q((resolve: any) => {
                this.$timeout(() => {
                    veteransFixture.length = params.size;

                    resolve({items: veteransFixture, totalCount: params.size});
                }, 2000);
            });
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
    $timeout: ng.ITimeoutService,
    CONSTANTS: any
) {
    return new VeteranFactory($http, $q, $timeout, CONSTANTS);
}

export {VeteranFactory, getInstanceVeteranFactory}
