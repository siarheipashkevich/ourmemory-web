import {AuthService} from '../../auth/auth.service';
import {Ii18nService} from '../../i18n/i18n.provider';

class HeaderController {
    /** @ngInject */
    constructor(
        private AuthService: AuthService,
        private i18nService: Ii18nService
    ) {}

    logout(): void {
        this.AuthService.clearIdentity();
    }

    changeLanguage(event: ng.IAngularEvent, key: string): void {
        event.preventDefault();

        this.i18nService.changeLanguage(key);
    }
}

export {
    HeaderController
}
