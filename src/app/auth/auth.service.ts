import {AuthFactory} from './auth.factory';

class AuthService {
    private localStorage: any = localStorage;

    /** @ngInject */
    constructor(
        private $q: ng.IQService,
        private $state: angular.ui.IStateService,
        private $rootScope: any,
        private AuthFactory: AuthFactory,
        private AUTH_ROLES: any,
        private CONSTANTS: any
    ) {}

    getAuthUser() {
        return this.AuthFactory.getAuthUser().then(
            (response: any) => {
                this.setIdentity(response.data);
                this.setAuthUser(response.data);

                this.$state.go('main.home');
            },
            (error: any) => this.$q.reject(error)
        );
    }

    setAuthUser(userData: any) {
        this.localStorage.setItem('authUser', JSON.stringify(userData));
    }

    fillAuthData() {
        var accessToken = this.localStorage.getItem('accessToken'),
            authUser = JSON.parse(this.localStorage.getItem('authUser'));

        if (!this.CONSTANTS.SERVER_IS_ENABLED) {
            accessToken = true;
            authUser = {
                email: 'siarheipashkevich@gmail.com'
            };
        }

        if (accessToken && authUser) {
            this.setIdentity(authUser);
            this.setAuthUser(authUser);
        }
    }

    isAuthenticated() {
        return angular.isDefined(this.$rootScope.authUser) && this.$rootScope.authUser !== null;
    }

    isAuthorized(authorizedRoles: any) {
        var userRole = this.isAuthenticated() ? this.$rootScope.authUser.role : this.AUTH_ROLES.guest;

        return (this.isAuthenticated() && authorizedRoles.indexOf(userRole) !== -1);
    }

    setToken(accessToken: string) {
        this.localStorage.setItem('accessToken', accessToken);
    }

    setIdentity(userData: any) {
        this.$rootScope.authenticated = true;

        this.$rootScope.authUser = userData;
    }

    clearIdentity() {
        this.$rootScope.authenticated = false;
        this.$rootScope.authUser = null;

        this.localStorage.removeItem('accessToken');
        this.localStorage.removeItem('authUser');
    }

    checkAccessToState(event: any, toState: any, toParams: any, fromState: any) {
        // deny access to the signIn page to authorized users
        if ((toState.name === 'main.login' || toState.name === 'main.register') && this.isAuthenticated()) {
            event.preventDefault();
            return;
        }

        if (toState.data && toState.data.allow) {
            var authorizedRoles: Array<string> = toState.data.allow;

            if (authorizedRoles.indexOf(this.AUTH_ROLES.all) === -1) {
                if (!this.isAuthorized(authorizedRoles)) {
                    event.preventDefault();

                    if (!this.isAuthenticated()) {
                        this.$state.go('main.login');
                    } else {
                        var state = fromState.name ? fromState.name : 'main.home';

                        this.$state.go(state);
                    }
                }
            }
        }
    }
}

export {AuthService}
