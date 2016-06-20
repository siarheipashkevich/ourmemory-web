import {ArticleListModel, ArticleModel} from './../models/article.model';
import {ArticleFactory} from './../article.factory';
import {IConfirmDialog} from './../../common/services/confirm-dialog/confirm-dialog.service';

class ArticleController {
    /** @ngInject */
    constructor(
        private $uibModal: any,
        private $log: ng.ILogService,
        private $rootScope: ng.IRootScopeService,
        private $document: any,
        private ArticleFactory: ArticleFactory,
        private ConfirmDialog: IConfirmDialog,
        public articleList: ArticleListModel
    ) {
        angular.element('body').addClass('no-hidden no-touch');
        angular.element('body').removeClass('notransition');

        $rootScope.$on('$stateChangeSuccess', () => {
            $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
        });
    }

    saveArticle(article?: ArticleModel) {
        this.$uibModal.open({
            templateUrl: 'app/article/templates/article-save.tpl.html',
            controller: 'ArticleSaveController',
            controllerAs: 'vm',
            animation: true,
            backdrop: 'static',
            size: 'lg',
            resolve: {
                article: () => {
                    return article;
                }
            }
        }).result.then((article: ArticleModel) => {
            this.$log.info(article);
        });
    }

    deleteArticle(id: number, index: number) {
        this.ConfirmDialog.confirm({
            message: 'confirm.message',
            btn: {
                ok: 'confirm.btn.ok',
                cancel: 'confirm.btn.cancel'
            }
        }).then(() => {
            this.ArticleFactory.deleteArticle(id).then(() => {
                this.articleList.articles.splice(index, 1);
            });
        });
    }
}

export {ArticleController}
