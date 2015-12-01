interface IAuthFactory {
    login(credentials: any): ng.IPromise<any>;
    register(credentials: any): ng.IPromise<any>;
}

class AuthFactory implements IAuthFactory {
    /** @ngInject */
    constructor(
        private $http: ng.IHttpService,
        private CONSTANTS: any
    ) {}

    login(credentials: any): ng.IHttpPromise<any> {
        return this.$http({
            method: 'POST',
            url: this.CONSTANTS.API_URL + 'token',
            data: 'grant_type=password&username=' + credentials.email + '&password=' + credentials.password,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
    }

    register(credentials: any): ng.IPromise<any> {
        return this.$http.post(this.CONSTANTS.API_URL + 'account/register', credentials);
    }

    getAuthUser(): ng.IPromise<any> {
        return this.$http.get(this.CONSTANTS.API_URL + 'account/userInfo');
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
