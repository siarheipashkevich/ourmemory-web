class VeteranFactory {
    constructor(
        private $http: ng.IHttpService,
        private Upload: any,
        private CONSTANTS: any
    ) {}

    getVeteran(id?: number): ng.IPromise<any> {
        return this.$http.get(this.CONSTANTS.API_URL + 'veteran' + (id ? '/' + id : ''));
    }

    saveVeteran(veteran: any) {
        return this.Upload.upload({
            url: this.CONSTANTS.API_URL + 'veteran',
            data: veteran
        });
    }
}

/** @ngInject */
function getInstanceVeteranFactory(
    $http: ng.IHttpService,
    Upload: any,
    CONSTANTS: any
) {
    return new VeteranFactory($http, Upload, CONSTANTS);
}

export {
    VeteranFactory,
    getInstanceVeteranFactory
}
