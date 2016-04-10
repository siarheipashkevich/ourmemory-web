import {AuthService} from './auth/auth.service';

interface IAppRootScopeService extends angular.IRootScopeService {
    defaultVeteranImage: string;
}

/** @ngInject */
function appRun(
    $rootScope: IAppRootScopeService,
    $uibModalStack: any,
    amMoment: any,
    AuthService: AuthService,
    CONSTANTS: any
) {
    AuthService.fillAuthData();

    $rootScope.defaultVeteranImage = CONSTANTS.DEFAULT_VETERAN_IMAGE;

    $rootScope.$on('$stateChangeStart', stateChangeStart);

    function stateChangeStart(
        event: ng.IAngularEvent,
        toState: ng.ui.IStateService,
        toParams: ng.ui.IStateParamsService,
        fromState: ng.ui.IStateService
    ) {
        AuthService.checkAccessToState(event, toState, toParams, fromState);

        // discard modal
        var top = $uibModalStack.getTop();
        if (top) {
            $uibModalStack.dismiss(top.key);
        }
    }
}

export {
    appRun
}
