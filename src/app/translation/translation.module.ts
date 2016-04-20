import {translationConfig} from './translation.config.ts';
import {translationRun} from './translation.run.ts';
import {TranslationProvider} from './translation.provider.ts';

export default angular
    .module('app.translation', [])
    .provider('TranslationService', TranslationProvider)
    .config(translationConfig)
    .run(translationRun);
