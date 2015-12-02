import { AuthService } from './auth.service';
import { AuthFactory } from './auth.factory';

class AuthController {
    private credentials: any;
    private errors: Object;

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

    validateErrorResponse(error: any) {
        if (error.ModelState) {
            error.ModelState.forEach((value: string, key: string) => {
                let errorKey = (key.replace('model.', '')).toLowerCase();

                if (!this.errors[errorKey]) {
                    this.errors[errorKey] = [];
                } else {
                    this.errors[errorKey].push(value);
                }
            });
        }
    }
}

export {
    AuthController
}
