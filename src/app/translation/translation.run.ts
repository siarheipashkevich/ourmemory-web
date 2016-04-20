import {ITranslationService} from './translation.provider.ts';

/** @ngInject */
function translationRun(TranslationService: ITranslationService, amMoment: any) {
    let languageKey = TranslationService.getLanguageKey();
    amMoment.changeLocale(languageKey);
}

export {translationRun}
