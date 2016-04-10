import en from './languages/en';
import ru from './languages/ru';
import {i18nProvider} from './i18n.provider';

/** @ngInject */
function i18nConfig(
    $translateProvider: ng.translate.ITranslateProvider,
    i18nServiceProvider: i18nProvider
) {
    let languageKey = i18nServiceProvider.getLanguageKey();

    $translateProvider
        .translations('ru', ru)
        .translations('en', en)
        .preferredLanguage(languageKey)
        .fallbackLanguage(languageKey)
        .useSanitizeValueStrategy('escape');
}

export {
    i18nConfig
}
