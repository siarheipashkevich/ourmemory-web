import {Ii18nService} from './i18n.provider';

/** @ngInject */
function i18nRun(i18nService: Ii18nService, amMoment: any) {
    let languageKey = i18nService.getLanguageKey();
    amMoment.changeLocale(languageKey);
}

export {i18nRun}
