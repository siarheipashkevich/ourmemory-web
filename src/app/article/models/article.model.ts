export class ArticleModel {
    id: number;
    title: string;
    views: number;
    articleImageUrl: string;
    shortDescription: string;
    fullDescription: string;
    createdDateTime: string;
    userId: number;
    userImageUrl: string;
    userName: string;

    constructor(data?: any) {
        this.id = data.id;
        this.title = data.title;
        this.views = data.views;
        this.articleImageUrl = data.articleImageUrl;
        this.shortDescription = data.shortDescription;
        this.fullDescription = data.fullDescription;
        this.createdDateTime = data.createdDateTime;
        this.userId = data.userId;
        this.userImageUrl = data.userImageUrl;
        this.userName = data.userName;
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
