import {ArticleModel} from './../models/article.model';

class ArticleDetailController {
    /** @ngInject */
    constructor(
        public article: ArticleModel
    ) {
        console.log(article);

        angular.element('body').addClass('no-hidden no-touch');
        angular.element('body').removeClass('notransition');
    }
}

export {ArticleDetailController}
