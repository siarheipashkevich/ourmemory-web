import {AuthService} from '../../auth/auth.service';
import {ITranslationService} from '../../translation/translation.provider';

class HeaderController {
    /** @ngInject */
    constructor(private AuthService: AuthService, private TranslationService: ITranslationService) {}

    logout(): void {
        this.AuthService.clearIdentity();
    }

    changeLanguage(event: ng.IAngularEvent, key: string): void {
        event.preventDefault();

        this.TranslationService.changeLanguage(key);
    }
}

export {HeaderController}
