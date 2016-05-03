import {ArticleModel} from './../models/article.model';

class ArticleSaveController {
    article: ArticleModel;

    /** @ngInject */
    constructor() {
        this.article = new ArticleModel();

        console.log('ArticleSaveController');
    }
}

export {ArticleSaveController}
