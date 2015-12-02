class VeteranFactory {
    /** @ngInject */
    constructor(
        private $http: ng.IHttpService,
        private CONSTANTS: any
    ) {}

    getVeteran(id?: number): ng.IPromise<any> {
        return this.$http.get(this.CONSTANTS.API_URL + 'veteran' + (id ? '/' + id : ''));
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
