import {ArticleListModel} from './../models/article.model';

class ArticleController {
    /** @ngInject */
    constructor(
        private $uibModal: any,
        private $log: ng.ILogService,
        private $rootScope: ng.IRootScopeService,
        private $document: any,
        public articleList: ArticleListModel
    ) {
        angular.element('body').addClass('no-hidden no-touch');
        angular.element('body').removeClass('notransition');

        $rootScope.$on('$stateChangeSuccess', () => {
            $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
        });
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
        });
    }
}

export {ArticleController}
