class ProfileFactory {
    private link: string;

    /** @ngInject */
    static getInstance(
        $http: ng.IHttpService,
        CONSTANTS: any
    ) {
        return new ProfileFactory($http, CONSTANTS);
    }

    constructor(
        private $http: ng.IHttpService,
        private CONSTANTS: any
    ) {
        this.link = CONSTANTS.API_URL + 'account';
    }

    updateProfile(profile: any): ng.IPromise<any> {
        return this.$http.post(this.link + '/updateProfile', profile).then((response: any) => {
            return response.data;
        });
    }

    changePassword(password: any): ng.IPromise<any> {
        return this.$http.post(this.link + '/changePassword', password);
    }
}

export {ProfileFactory}
