import { AuthService } from '../../auth/auth.service';

class HeaderController {
    /** @ngInject */
    constructor(
        private AuthService: AuthService
    ) {}

    logout(): void {
        this.AuthService.clearIdentity();
    }
}

export {
    HeaderController
}
