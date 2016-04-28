class ArticleDetailController {
    /** @ngInject */
    constructor(
        public article: any
    ) {
        console.log(article);

        angular.element('body').addClass('no-hidden no-touch');
        angular.element('body').removeClass('notransition');
    }
}

export {ArticleDetailController}
