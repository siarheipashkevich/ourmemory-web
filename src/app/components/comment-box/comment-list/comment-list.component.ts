import {CommentListController} from './comment-list.controller';

export let CommentListComponent: ng.IComponentOptions = {
    controller: CommentListController,
    controllerAs: 'vm',
    templateUrl: 'app/components/comment-box/comment-list/comment-list.tpl.html',
    bindings: {
        comments: '='
    }
};
