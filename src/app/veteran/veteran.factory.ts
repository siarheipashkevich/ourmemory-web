import veteransFixture from './fixtures/veterans';
import {VeteranModel, VeteranListModel} from './models/veteran';

class VeteranFactory {
    private link: string;

    constructor(
        private $http: ng.IHttpService,
        private $q: ng.IQService,
        private CONSTANTS: any
    ) {
        this.link = CONSTANTS.API_URL + 'veteran';
    }

    getVeteran(id: number): ng.IPromise<VeteranModel> {
        if (this.CONSTANTS.SERVER_IS_ENABLED) {
            return this.$http.get(this.link + `/${id}`).then((response: any) => {
                return new VeteranModel(response.data.veteran);
            });
        } else {
            return this.$q((resolve: ng.IQResolveReject<VeteranModel>) => {
                resolve(new VeteranModel(veteransFixture[id - 1]));
            });
        }
    }

    getVeterans(params: any): ng.IPromise<VeteranListModel> {
        if (this.CONSTANTS.SERVER_IS_ENABLED) {
            return this.$http.get(this.link, {params}).then((response: any) => {
                return new VeteranListModel(response.data.items, response.data.totalCount);
            });
        } else {
            return this.$q((resolve: any, reject: any) => {
                let veterans = angular.copy(veteransFixture);
                veterans.length = params.size;

                resolve(new VeteranListModel(veterans, veteransFixture.length));
            });
        }
    }

    saveVeteran(veteran: VeteranModel): ng.IPromise<any> {
        let saveVeteranPromise;

        if (veteran.id) {
            saveVeteranPromise = this.$http.put(this.link, veteran);
        } else {
            saveVeteranPromise = this.$http.post(this.link, veteran);
        }

        return saveVeteranPromise.then((response: any) => {
            return new VeteranModel(response.data);
        });
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
