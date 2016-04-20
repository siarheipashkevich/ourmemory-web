import en from './languages/en';
import ru from './languages/ru';
import {TranslationProvider} from './translation.provider.ts';

/** @ngInject */
function translationConfig(
    $translateProvider: ng.translate.ITranslateProvider,
    TranslationServiceProvider: TranslationProvider
) {
    let languageKey = TranslationServiceProvider.getLanguageKey();

    $translateProvider
        .translations('ru', ru)
        .translations('en', en)
        .preferredLanguage(languageKey)
        .fallbackLanguage(languageKey)
        .useSanitizeValueStrategy('escape');
}

export {translationConfig}
