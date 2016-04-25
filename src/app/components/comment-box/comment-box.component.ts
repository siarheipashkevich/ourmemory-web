import {CommentBoxController} from './comment-box.controller';

export let CommentBoxComponent: ng.IComponentOptions = {
    controller: CommentBoxController,
    controllerAs: 'vm',
    templateUrl: 'app/components/comment-box/comment-box.tpl.html',
    bindings: {
        type: '@'
    }
};
