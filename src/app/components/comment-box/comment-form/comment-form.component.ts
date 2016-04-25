import {CommentFormController} from './comment-form.controller';

export let CommentFormComponent: ng.IComponentOptions = {
    controller: CommentFormController,
    controllerAs: 'vm',
    templateUrl: 'app/components/comment-box/comment-form/comment-form.tpl.html',
    bindings: {
        commentHub: '='
    }
};
