export class CommentController {
    entityId: number;
    entityType: string;
    emptyMessage: boolean;

    commentHub: any;
    message: string;
    comments: Array<any>;

    /** @ngInject */
    constructor(
        private $log: ng.ILogService,
        private $rootScope: ng.IRootScopeService,
        private Hub: ngSignalr.HubFactory,
        private CONSTANTS: any
    ) {
        this.message = '';
        this.comments = [];

        this.commentHub = new Hub('commentHub', {
            rootPath: CONSTANTS.URL + '/signalr',
            logging: true,
            listeners: {
                'getAllComments': (comments: any) => {
                    this.comments = comments;
                    $log.warn(comments.length);
                    $rootScope.$apply();
                },
                'getComment': (comment: any) => {
                    this.comments.push(comment);
                    $rootScope.$apply();
                },
                'getRemoveComment': (comment: any) => {
                    let indexRemovedComment;

                    for (let i = 0; i < this.comments.length; i++) {
                        if (this.comments[i].id === comment.id) {
                            indexRemovedComment = i;
                            break;
                        }
                    }

                    this.comments.splice(indexRemovedComment, 1);

                    $rootScope.$apply();
                }
            },
            queryParams: {
                'token': localStorage.getItem('accessToken')
            },
            methods: ['joinRoom', 'sendComment', 'removeComment'],
            errorHandler: (error: any) => {
                $log.error(error);
            }
        });

        this.commentHub.promise.then(() => {
            this.commentHub.joinRoom(this.entityId, this.entityType);
        });
    }

    sendComment(message: string) {
        if (message === '') {
            this.emptyMessage = true;
            return;
        }

        this.commentHub.sendComment(message).then(() => {
            this.$rootScope.$apply(() => {
                this.message = '';
            });
        }, (error: Error) => {
            this.$log.error(error);
        });
    }

    removeComment(id: number) {
        this.commentHub.removeComment(id);
    }

    $onDestroy() {
        this.commentHub.disconnect();
    }
}
