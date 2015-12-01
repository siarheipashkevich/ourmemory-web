import { AuthService } from './auth.service';
import { AuthFactory } from './auth.factory';

class AuthController {
    public credentials: any;

    /** @ngInject */
    constructor(
        private $log: angular.ILogService,
        private $q: angular.IQService,
        private AuthService: AuthService,
        private AuthFactory: AuthFactory
    ) {}

    login(loginFormValid: boolean) {
        if (loginFormValid) {
            this.AuthFactory.login(this.credentials).then((response: any) => {
                this.AuthService.setToken(response.data.access_token);
            }, (error: any) => {
                return this.$q.reject(error);
            }).then(() => {
                return this.AuthService.getAuthUser();
            }).catch((error: any) => {
                this.$log.error(error);
            });
        }
    }

    register(registerFormValid: boolean): void {
        if (registerFormValid) {
            this.AuthFactory.register(this.credentials).catch((error: any) => {
                this.$log.error(error);

                return this.$q.reject();
            }).then(() => {
                this.login(true);
            });
        }
    }
}

export {
    AuthController
}
