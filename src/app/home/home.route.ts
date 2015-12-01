// import { AuthService } from '../auth/auth.service';

/** @ngInject */
function homeRoute(
    $stateProvider: ng.ui.IStateProvider,
    AUTH_ROLES: any
) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/home/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'vm',
            data: {
                allow: [AUTH_ROLES.user]
            }
            // resolve: {
            //    /** @ngInject */
            //    auth: (AuthService: AuthService, $q: ng.IQService) => {
            //        debugger;
            //        return $q.when(
            //            localStorage.getItem('access_token') && !AuthService.isAuthenticated()
            //                ? AuthService.getAuthUser()
            //                : null
            //        );
            //    }
            // }
        });
}

export {
    homeRoute
}
