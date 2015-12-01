import { AuthService } from './auth/auth.service';

/** @ngInject */
function appRun(
    $rootScope: angular.IRootScopeService,
    AuthService: AuthService
) {
    $rootScope.$on('$stateChangeStart', stateChangeStart);

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
