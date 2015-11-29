/** @ngInject */
function coreConfig($urlRouterProvider: ng.ui.IUrlRouterProvider, $httpProvider: angular.IHttpProvider) {
    $urlRouterProvider.otherwise('/');

    $httpProvider.interceptors.push('AuthInterceptor');
}

export {
    coreConfig
}
