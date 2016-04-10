import { authRoute } from './auth.route';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { getInstanceAuthFactory } from './auth.factory';
import { authInterceptor } from './auth.interceptor';
import { AUTH_ROLES } from './auth.constant';

export default angular.module('app.auth', [])
    .config(authRoute)
    .controller('AuthController', AuthController)
    .factory('AuthFactory', getInstanceAuthFactory)
    .factory('AuthInterceptor', authInterceptor)
    .service('AuthService', AuthService)
    .constant('AUTH_ROLES', AUTH_ROLES);
