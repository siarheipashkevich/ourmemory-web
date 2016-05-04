import {UserModel} from './../../user/models/user.model';

export class ArticleModel {
    id: number;
    title: string;
    views: number;
    image: string;
    shortDescription: string;
    fullDescription: string;
    createdDateTime: string;
    user: UserModel;

    constructor(data?: any) {
        this.fullDescription = '';

        if (data) {
            this.id = data.id;
            this.title = data.title;
            this.views = data.views;
            this.image = data.image;
            this.shortDescription = data.shortDescription;
            this.fullDescription = data.fullDescription;
            this.createdDateTime = data.createdDateTime;

            this.user = new UserModel(data.user);
        }
    }
}

export class ArticleListModel {
    articles: Array<ArticleModel>;
    totalCount: number;

    constructor(articles: Array<any>, totalCount: number) {
        this.articles = [];
        this.totalCount = totalCount;

        articles.forEach((articleData: any) => {
            this.articles.push(new ArticleModel(articleData));
        });
    }
}
