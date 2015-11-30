class UserFactory {
    /** @ngInject */
    constructor(
        private $http: ng.IHttpService,
        private CONSTANTS: any
    ) {}

    getUser(username: string): ng.IPromise<ng.IDeferred<void>> {
        return this.$http.post(this.CONSTANTS.API_URL + 'api/getUser', {
            username: username
        });
    }
}

/** @ngInject */
function getInstanceUserFactory(
    $http: ng.IHttpService,
    CONSTANTS: any
) {
    return new UserFactory($http, CONSTANTS);
}

export {
    UserFactory,
    getInstanceUserFactory
}
