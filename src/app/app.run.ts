import { AuthService } from './auth/auth.service';

/** @ngInject */
function appRun(
    $rootScope: angular.IRootScopeService,
    AuthService: AuthService
) {
    AuthService.fillAuthData();

    $rootScope.$on('$stateChangeStart', stateChangeStart);

    $rootScope.$on('$stateChangeSuccess', function () {
        console.log('$stateChangeSuccess');
        window.dispatchEvent(new Event('resize'));
    });

    $rootScope.$on('$viewContentLoaded', function () {
        console.log('resize');
        window.dispatchEvent(new Event('resize'));
    });


    function stateChangeStart(
        event: ng.IAngularEvent,
        toState: ng.ui.IStateService,
        toParams: ng.ui.IStateParamsService,
        fromState: ng.ui.IStateService
    ) {
        AuthService.checkAccessToState(event, toState, toParams, fromState);
    }
}

export {
    appRun
}
