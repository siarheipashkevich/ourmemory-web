/** @ngInject */
function articleRoute(
    $stateProvider: ng.ui.IStateProvider,
    AUTH_ROLES: any
) {
    $stateProvider
        .state('main.articles', {
            url: 'articles',
            templateUrl: 'app/article/templates/article.tpl.html',
            controller: 'ArticleController',
            controllerAs: 'vm',
            data: {
                allow: [AUTH_ROLES.all]
            }
        });
}

export {
    articleRoute
}
