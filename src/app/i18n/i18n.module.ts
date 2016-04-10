import {i18nConfig} from './i18n.config';
import {i18nRun} from './i18n.run';
import {i18nProvider} from './i18n.provider';

export default angular
    .module('app.i18n', [])
    .provider('i18nService', i18nProvider)
    .config(i18nConfig)
    .run(i18nRun);
