export class CommentController {
    entityId: number;
    entityType: string;
    emptyMessage: boolean;

    commentHub: any;
    message: string;
    comments: Array<any>;

    options: any;

    /** @ngInject */
    constructor(
        private $log: ng.ILogService,
        private $rootScope: ng.IRootScopeService,
        private Hub: ngSignalr.HubFactory,
        private CONSTANTS: any
    ) {
        this.message = '';
        this.comments = [];

        let hubOptions: ngSignalr.HubOptions = {
            rootPath: CONSTANTS.URL + '/signalr',
            logging: false,
            listeners: {
                'getAllComments': (comments: any) => {
                    this.comments = comments;
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
            stateChanged: (state: any) => {
                let stateNames = {0: 'connecting', 1: 'connected', 2: 'reconnecting', 4: 'disconnected'};

                if (stateNames[state.newState] === 'disconnected') {
                    Object.getOwnPropertyNames(hubOptions.listeners)
                        .filter((propName: string) => {
                            return typeof hubOptions.listeners[propName] === 'function';
                        })
                        .forEach((propName: string) => {
                            this.commentHub.proxy.off(propName, hubOptions.listeners[propName]);
                        });
                }
            },
            queryParams: {
                'token': localStorage.getItem('accessToken')
            },
            methods: ['joinRoom', 'sendComment', 'removeComment'],
            errorHandler: (error: any) => {
                $log.error(error);
            }
        };

        this.commentHub = new Hub('commentHub', hubOptions);

        this.commentHub.promise.done(() => {
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
