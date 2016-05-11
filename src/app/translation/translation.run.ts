import {ITranslationService} from './translation.provider.ts';

/** @ngInject */
function translationRun(
    TranslationService: ITranslationService,
    amMoment: any,
    $translateMessageFormatInterpolation: any
) {
    let languageKey = TranslationService.getLanguageKey();

    amMoment.changeLocale(languageKey);
    $translateMessageFormatInterpolation.setLocale(languageKey);
}

export {translationRun}
