interface Ii18nService {
    changeLanguage(key: string): void;
    getLanguageKey(): string;
}

class i18nProvider implements ng.IServiceProvider {
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
    public $get($translate: ng.translate.ITranslateService, amMoment: any): Ii18nService {
        return {
            changeLanguage: (key: string) => {
                $translate.use(key);
                amMoment.changeLocale(key);

                this.languageKey = key;
                localStorage.setItem('locale', key);
            },
            getLanguageKey: (): string => this.getLanguageKey()
        };
    }
}

export {Ii18nService, i18nProvider}
