/** @ngInject */
function coreConfig(
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $httpProvider: ng.IHttpProvider,
    $provide: ng.auto.IProvideService
) {
    $urlRouterProvider.otherwise('/');

    $httpProvider.interceptors.push('AuthInterceptor');

    $provide.decorator('$exceptionHandler', extendExceptionHandler);
}

/** @ngInject */
function extendExceptionHandler($delegate: ng.IExceptionHandlerService, $injector: ng.auto.IInjectorService) {
    return (exception: Error, cause: any) => {
        let toastr: ng.toastr.IToastrService = $injector.get<ng.toastr.IToastrService>('toastr');

        $delegate(exception, cause);

        /**
         * Could add the error to a service's collection,
         * add errors to $rootScope, log errors to remote web server,
         * or log locally. Or throw hard. It is entirely up to you.
         * throw exception;
         */
        toastr.error(exception.message);
    };
}

export {coreConfig}
