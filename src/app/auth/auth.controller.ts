import { AuthService } from './auth.service';

class AuthCredentials {
    public password: string;
}

class LoginCredentials extends AuthCredentials {
    public username: string;
}

class RegisterCredentials extends AuthCredentials {
    public email: string;
    public confirmPassword: string;
}

class AuthController {
    public loginCredentials: LoginCredentials;
    public registerCredentials: RegisterCredentials;

    /** @ngInject */
    constructor(
        private $log: angular.ILogService,
        private AuthService: AuthService,
        private $state: angular.ui.IStateService
    ) {}

    login(loginFormValid: boolean) {
        if (loginFormValid) {
            this.AuthService.login(this.loginCredentials).then(
                () => {
                    debugger;
                    this.$state.transitionTo('home');
                },
                () => {
                    this.$log.error('ERROR LOGIN');
                }
            );
        } else {
            alert('Login form is not valid');
        }
    }

    register(registerFormValid: boolean): void {
        if (registerFormValid) {
            this.AuthService.register(this.registerCredentials).then(
                (response: any) => {
                    this.$log.info('SUCCESS REGISTER', response);
                },
                () => {
                    this.$log.error('ERROR REGISTER');
                }
            );
        } else {
            alert('Register form is not valid');
        }
    }
}

export {
    AuthController,
    LoginCredentials,
    RegisterCredentials
}
