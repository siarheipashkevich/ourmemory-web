import { coreConfig } from './core.config';

export default angular
    .module('app.core', [
        'ui.bootstrap',
        'ui.router'
    ])
    .config(coreConfig);
