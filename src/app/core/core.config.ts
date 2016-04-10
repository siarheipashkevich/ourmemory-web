/** @ngInject */
function coreConfig($urlRouterProvider: ng.ui.IUrlRouterProvider, $httpProvider: ng.IHttpProvider) {
    $urlRouterProvider.otherwise('/');

    $httpProvider.interceptors.push('AuthInterceptor');
}

export {coreConfig}
