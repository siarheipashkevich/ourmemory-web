import {CommentController} from './comment.controller.ts';

let CommentComponent: ng.IComponentOptions = {
    controller: CommentController,
    controllerAs: 'vm',
    templateUrl: 'app/components/comment/comment.tpl.html',
    bindings: {
        entityId: '@',
        entityType: '@',
        authUser: '<'
    }
};

export {CommentComponent}
