export class CommentController {
    commentHub: any;
    comments: Array<any>;

    /** @ngInject */
    constructor($rootScope: ng.IRootScopeService, CONSTANTS: any, Hub: ngSignalr.HubFactory) {
        let commentHubOptions: ngSignalr.HubOptions = {
            // root path for the signalR web service
            rootPath: CONSTANTS.URL + '/signalr',

            logging: true,

            // client side methods
            listeners: {
                'getAllComments': (comments: any) => {
                    console.log(comments);

                    this.comments = comments;

                    $rootScope.$apply();
                },
                'getComment': (comment: any) => {
                    console.log(comment);

                    this.comments.push(comment);

                    $rootScope.$apply();
                }
            },

            //query params sent on initial connection
            queryParams:{
                'Bearer': localStorage.getItem('accessToken')
            },

            // server side methods
            methods: ['joinRoom', 'leaveRoom', 'sendComment'],

            // handle connection error
            errorHandler: (error: any) => {
                console.error(error);
            },

            stateChanged: (state) => {
                switch (state.newState) {
                    case $.signalR.connectionState.connecting:
                        // your code here
                        break;

                    case $.signalR.connectionState.connected:

                        break;

                    case $.signalR.connectionState.reconnecting:
                        // your code here
                        break;

                    case $.signalR.connectionState.disconnected:
                        // your code here
                        break;
                }
            }
        };

        this.commentHub = new Hub('commentHub', commentHubOptions);

        this.commentHub.promise.then(() => {
            console.log('CONNECTED');
            this.commentHub.joinRoom(5, 'ArticleServiceComment');
        });
    }
}
