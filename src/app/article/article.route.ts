import {ArticleFactory} from './article.factory';

/** @ngInject */
function articleRoute($stateProvider: ng.ui.IStateProvider, AUTH_ROLES: any) {
    $stateProvider
        .state('main.articles', {
            url: 'articles',
            templateUrl: 'app/article/templates/article.tpl.html',
            controller: 'ArticleController',
            controllerAs: 'vm',
            resolve: {
                /** @ngInject */
                articleList: (ArticleFactory: ArticleFactory) => {
                    return ArticleFactory.getArticles();
                }
            },
            data: {
                allow: [AUTH_ROLES.all]
            }
        })
        .state('main.articles.detail', {
            url: '/{id:int}',
            templateUrl: 'app/article/templates/article-detail.tpl.html',
            controller: 'ArticleDetailController',
            controllerAs: 'vm',
            resolve: {
                /** @ngInject */
                article: ($stateParams: any, ArticleFactory: ArticleFactory) => {
                    return ArticleFactory.getArticle($stateParams.id);
                }
            },
            data: {
                allow: [AUTH_ROLES.all]
            }
        });
}

export {articleRoute}
