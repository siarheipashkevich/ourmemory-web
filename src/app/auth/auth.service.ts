import { IAuthFactory } from './auth.factory';
import { LoginCredentials, RegisterCredentials } from './auth.controller';

class AuthService {
    private localStorage: any;

    /** @ngInject */
    constructor(
        private AuthFactory: IAuthFactory,
        private $q: ng.IQService,
        private AUTH_ROLES: any,
        private $state: angular.ui.IStateService,
        private $rootScope: any
    ) {
        this.localStorage = localStorage;
    }

    login(credentials: LoginCredentials): ng.IPromise<ng.IDeferred<void>> {
        var deffer = this.$q.defer();

        this.AuthFactory.login(credentials).then(
            (response: any) => {
                if (response.data.access_token) {
                    this.setToken(response.data.access_token);

                    deffer.resolve(response);
                } else {
                    deffer.reject('access_token not valid');
                }
            },
            (response: any) => {
                deffer.reject(response);
            }
        );

        return deffer.promise;
    }

    register(credentials: RegisterCredentials): ng.IPromise<ng.IDeferred<void>> {
        var deffer = this.$q.defer();

        this.AuthFactory.register(credentials).then(
            (response: any) => {
                deffer.resolve(response);
            },
            (response: any) => {
                deffer.reject(response);
            }
        );

        return deffer.promise;
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

    setIdentity(userData) {
        this.$rootScope.isLoggedIn = true;
        this.$rootScope.authUser = userData;
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
