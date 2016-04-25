export class CommentFormController {
    commentHub: any;
    
    constructor() {
        console.log('CommentFormController');
    }

    sendComment(message: string) {
        this.commentHub.sendComment(5, 'ArticleServiceComment', message);
    }
}
