import {articleRoute} from './article.route';
import {ArticleController} from './controllers/article.controller';
import {ArticleDetailController} from './controllers/article-detail.controller';
import {ArticleSaveController} from './controllers/article-save.controller';

export default angular
    .module('app.article', [])
    .config(articleRoute)
    .controller('ArticleController', ArticleController)
    .controller('ArticleDetailController', ArticleDetailController)
    .controller('ArticleSaveController', ArticleSaveController);
