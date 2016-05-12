import {AuthService} from '../../auth/auth.service';
import {ITranslationService} from '../../translation/translation.provider';

class HeaderController {
    /** @ngInject */
    constructor(
        private $uibModal: ng.ui.bootstrap.IModalService,
        private AuthService: AuthService,
        private TranslationService: ITranslationService
    ) {}

    logout(): void {
        this.AuthService.clearIdentity();
    }

    changeLanguage(event: ng.IAngularEvent, key: string): void {
        event.preventDefault();

        this.TranslationService.changeLanguage(key);
    }

    showProfile() {
        this.$uibModal.open({
            templateUrl: 'app/profile/templates/profile.tpl.html',
            controller: 'ProfileController',
            controllerAs: 'vm',
            animation: true,
            backdrop: 'static'
        });
    }
}

export {HeaderController}
