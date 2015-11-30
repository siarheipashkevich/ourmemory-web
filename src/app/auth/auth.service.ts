import { IAuthFactory } from './auth.factory';

class AuthService {
    private localStorage: any;

    /** @ngInject */
    constructor(
        private AuthFactory: IAuthFactory,
        private $q: ng.IQService,
        private $state: angular.ui.IStateService,
        private AUTH_ROLES: any,
        private $rootScope: any
    ) {
        this.localStorage = localStorage;
    }

    isAuthenticated() {
        return angular.isDefined(this.$rootScope.authUser) && this.$rootScope.authUser !== null;
    }

    isAuthorized(authorizedRoles: any) {
        var userRole = this.isAuthenticated() ? this.$rootScope.authUser.role : this.AUTH_ROLES.guest;

        return (this.isAuthenticated() && authorizedRoles.indexOf(userRole) !== -1);
    }

    setToken(accessToken: string) {
        this.localStorage.setItem('access_token', accessToken);
    }

    setIdentity(userData: any) {
        this.$rootScope.isLoggedIn = true;

        this.$rootScope.authUser = userData;
    }

    clearIdentity() {
        this.$rootScope.isLoggedIn = false;
        this.$rootScope.authUser = null;

        this.localStorage.removeItem('access_token');
    }

    checkAccessToState(event: any, toState: any, toParams: any, fromState: any) {
        // deny access to the signIn page to authorized users
        if (toState.name === 'home.login' && this.isAuthenticated()) {
            event.preventDefault();
        }

        if (toState.data && toState.data.allow) {
            var authorizedRoles = toState.data.allow;

            if (authorizedRoles.indexOf(this.AUTH_ROLES.all) === -1) {
                if (!this.isAuthorized(authorizedRoles)) {
                    event.preventDefault();

                    if (!this.isAuthenticated()) {
                        this.$state.transitionTo('home.login');
                    } else {
                        var state = fromState.name ? fromState.name : 'home';

                        this.$state.transitionTo(state);
                    }
                }
            }
        }
    }
}

export {
    AuthService
}
