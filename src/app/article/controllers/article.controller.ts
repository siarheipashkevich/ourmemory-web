import {ArticleListModel} from './../models/article.model';

class ArticleController {
    /** @ngInject */
    constructor(
        private $uibModal: any,
        private $log: ng.ILogService,
        public articleList: ArticleListModel
    ) {
        angular.element('body').addClass('no-hidden no-touch');
        angular.element('body').removeClass('notransition');
    }

    addArticle() {
        this.$uibModal.open({
            templateUrl: 'app/article/templates/article-save.tpl.html',
            controller: 'ArticleSaveController',
            controllerAs: 'vm',
            animation: true,
            backdrop: 'static',
            size: 'lg'
        }).result.then((article: any) => {
            this.$log.info(article);
        }, () => {
            this.$log.info('Модальное окно закрыто:  ' + new Date());
        });
    }
}

export {ArticleController}
