interface ITranslationService {
    changeLanguage(key: string): void;
    getLanguageKey(): string;
}

class TranslationProvider implements ng.IServiceProvider {
    private languageKey: string = 'ru';

    constructor() {
        if (localStorage.getItem('locale')) {
            this.languageKey = localStorage.getItem('locale');
        }
    }

    public getLanguageKey(): string {
        return this.languageKey;
    }

    /** @ngInject */
    public $get(
        $translate: ng.translate.ITranslateService,
        amMoment: any,
        $translateMessageFormatInterpolation: any
    ): ITranslationService {
        return {
            changeLanguage: (key: string) => {
                $translateMessageFormatInterpolation.setLocale(key);
                $translate.use(key);
                amMoment.changeLocale(key);

                this.languageKey = key;

                localStorage.setItem('locale', key);
            },
            getLanguageKey: (): string => this.getLanguageKey()
        };
    }
}

export {ITranslationService, TranslationProvider}
