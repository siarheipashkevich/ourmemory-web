import {articleRoute} from './article.route';
import {ArticleController} from './article.controller';

export default angular
    .module('app.article', [])
    .config(articleRoute)
    .controller('ArticleController', ArticleController);
