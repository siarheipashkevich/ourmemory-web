import {CommentBoxComponent} from './comment-box/comment-box.component';
import {CommentListComponent} from './comment-box/comment-list/comment-list.component';

export default angular
    .module('app.components', [])
    .component('omCommentBox', CommentBoxComponent)
    .component('omCommentList', CommentListComponent)
