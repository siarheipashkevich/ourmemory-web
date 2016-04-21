import {coreConfig} from './core.config';

export default angular
    .module('app.core', [
        'ngAnimate',
        'ui.bootstrap',
        'ui.router',
        'ngFileUpload',
        'rzModule',
        'uiGmapgoogle-maps',
        'codemwnci.markdown-edit-preview',
        'angularMoment',
        'pascalprecht.translate',
        'toastr'
    ])
    .config(coreConfig);
