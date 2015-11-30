import { AuthService } from './auth.service';
import { AuthFactory } from './auth.factory';
import { UserFactory } from '../user/user.factory';

class AuthController {
    public credentials: any;

    /** @ngInject */
    constructor(
        private $log: angular.ILogService,
        private $state: angular.ui.IStateService,
        private AuthService: AuthService,
        private AuthFactory: AuthFactory,
        private UserFactory: UserFactory
    ) {}

    getAuthUser(username: string) {
        this.UserFactory.getUser(username).then(
            (response: any) => {
                this.AuthService.setIdentity(response);

                this.$state.transitionTo('home');
            },
            () => {
                this.$log.error('При получении данных о аутентифицирован пользователе возникла некая ошибка.');
            }
        );
    }

    login(loginFormValid: boolean) {
        if (loginFormValid) {
            this.AuthFactory.login(this.credentials).then(
                (response: any) => {
                    if (response.data.access_token && response.data.username) {
                        this.AuthService.setToken(response.data.access_token);

                        this.getAuthUser(response.data.username);
                    }
                },
                () => {
                    this.$log.error('При аутентификация пользователя произошла некая ошибка.');
                }
            );
        } else {
            alert('Форма входа содержит ошибки.');
        }
    }

    register(registerFormValid: boolean): void {
        if (registerFormValid) {
            this.AuthFactory.register(this.credentials).then(
                (response: any) => {
                    if (response.status === 200) {
                        this.login(true);
                    } else {
                        this.$log.error('Регистрация пользователя произошла с ошибкой.');
                    }
                },
                () => {
                    this.$log.error('При регистрации пользователя произошла некая ошибкая.');
                }
            );
        } else {
            alert('Регистрационная форма содержит ошибки.');
        }
    }
}

export {
    AuthController
}
