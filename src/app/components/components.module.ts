import {CommentBoxComponent} from './comment-box/comment-box.component';
import {CommentListComponent} from './comment-box/comment-list/comment-list.component';
import {CommentFormComponent} from './comment-box/comment-form/comment-form.component';

export default angular
    .module('app.components', [])
    .component('omCommentBox', CommentBoxComponent)
    .component('omCommentList', CommentListComponent)
    .component('omCommentForm', CommentFormComponent);
