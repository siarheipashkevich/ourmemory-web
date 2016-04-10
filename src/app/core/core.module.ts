import {coreConfig} from './core.config';

export default angular
    .module('app.core', [
        'ui.bootstrap',
        'ui.router',
        'ngFileUpload',
        'rzModule',
        'uiGmapgoogle-maps',
        'codemwnci.markdown-edit-preview',
        'angularMoment',
        'pascalprecht.translate'
    ])
    .config(coreConfig);
