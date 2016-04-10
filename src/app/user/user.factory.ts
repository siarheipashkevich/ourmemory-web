class UserFactory {
    constructor(
        private $http: ng.IHttpService,
        private CONSTANTS: any
    ) {}

    getUser(): ng.IPromise<any> {
        return this.$http.get(this.CONSTANTS.API_URL + 'account/userInfo');
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
