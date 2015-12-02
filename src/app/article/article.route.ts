/** @ngInject */
function articleRoute(
    $stateProvider: ng.ui.IStateProvider,
    AUTH_ROLES: any
) {
    $stateProvider
        .state('home.articles', {
            url: 'articles',
            templateUrl: 'app/article/templates/article.html',
            controller: 'ArticleController',
            controllerAs: 'vm',
            data: {
                allow: [AUTH_ROLES.user]
            }
        });
}

export {
    articleRoute
}
