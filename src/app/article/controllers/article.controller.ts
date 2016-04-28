class ArticleController {
    private title: string;

    /** @ngInject */
    constructor(
        private $uibModal: any,
        private $log: ng.ILogService
    ) {
        this.title = 'Статьи';

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
            this.$log.info(article)
        }, () => {
            this.$log.info('Модальное окно закрыто:  ' + new Date());
        });
    }
}

export {ArticleController}
