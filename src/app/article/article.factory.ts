import articleFixtures from './fixtures/article.fixture';
import {ArticleModel, ArticleListModel} from './models/article.model';

class ArticleFactory {
    private link: string;

    /** @ngInject */
    static getInstance(
        $http: ng.IHttpService,
        $q: ng.IQService,
        CONSTANTS: any
    ) {
        return new ArticleFactory($http, $q, CONSTANTS);
    }

    constructor(
        private $http: ng.IHttpService,
        private $q: ng.IQService,
        private CONSTANTS: any
    ) {
        this.link = CONSTANTS.API_URL + 'article';
    }

    getArticle(id: number): ng.IPromise<ArticleModel> {
        if (this.CONSTANTS.SERVER_IS_ENABLED) {
            return this.$http.get(this.link + `/${id}`).then((response: any) => {
                return new ArticleModel(response.data);
            });
        } else {
            return this.$q((resolve: ng.IQResolveReject<ArticleModel>) => {
                resolve(new ArticleModel(articleFixtures[id - 1]));
            });
        }
    }

    getArticles(params?: any): ng.IPromise<ArticleListModel> {
        if (this.CONSTANTS.SERVER_IS_ENABLED) {
            return this.$http.get(this.link, {params}).then((response: any) => {
                return new ArticleListModel(response.data.items, response.data.totalCount);
            });
        } else {
            return this.$q((resolve: any) => {
                resolve(new ArticleListModel(articleFixtures, articleFixtures.length));
            });
        }
    }

    saveArticle(article: ArticleModel): ng.IPromise<any> {
        let saveArticlePromise;

        if (article.id) {
            saveArticlePromise = this.$http.put(this.link, article);
        } else {
            saveArticlePromise = this.$http.post(this.link, article);
        }

        return saveArticlePromise.then((response: any) => {
            return new ArticleModel(response.data);
        });
    }

    deleteArticle(id: number) {
        return this.$http.delete(this.link + `/${id}`);
    }
}

export {ArticleFactory}
