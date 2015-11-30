interface IAuthFactory {
    login(credentials: any): ng.IPromise<ng.IDeferred<void>>;
    register(credentials: any): ng.IPromise<ng.IDeferred<void>>;
}

class AuthFactory implements IAuthFactory {
    /** @ngInject */
    constructor(
        private $http: ng.IHttpService,
        private CONSTANTS: any
    ) {}

    login(credentials: any): ng.IHttpPromise<ng.IDeferred<void>> {
        return this.$http({
            method: 'POST',
            url: this.CONSTANTS.API_URL + 'token',
            data: 'grant_type=password&username=' + credentials.username + '&password=' + credentials.password,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
    }

    register(credentials: any): ng.IPromise<ng.IDeferred<void>> {
        return this.$http.post(this.CONSTANTS.API_URL + 'api/Account/Register/', credentials);
    }
}

/** @ngInject */
function getInstanceAuthFactory(
    $http: ng.IHttpService,
    CONSTANTS: any
) {
    return new AuthFactory($http, CONSTANTS);
}

export {
    IAuthFactory,
    AuthFactory,
    getInstanceAuthFactory
}
