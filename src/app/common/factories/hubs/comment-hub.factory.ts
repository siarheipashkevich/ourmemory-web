class CommentHubFactory {
    commentHub: any;

    constructor(private CONSTANTS: any, private Hub: ngSignalr.HubFactory) {
        let commentHubOptions: ngSignalr.HubOptions = {
            // root path for the signalR web service
            rootPath: CONSTANTS.URL + '/signalr',

            logging: true,

            // client side methods
            listeners: {
                'getAllComments': (comments: any) => {
                    console.log(comments);
                }
            },

            // server side methods
            methods: ['joinRoom', 'leaveRoom', 'sendComment'],

            // handle connection error
            errorHandler: (error: any) => {
                console.error(error);
            },

            stateChanged: (state) => {
                console.log(state.newState);

                switch (state.newState) {
                    case $.signalR.connectionState.connecting:
                        // your code here
                        break;
                    case $.signalR.connectionState.connected:
                        // your code here
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
    }

    joinRoom() {
        this.commentHub.joinRoom(5, 'ArticleServiceComment');
    }
}

/** @ngInject */
function getInstanceCommentHubFactory(CONSTANTS: any, Hub: ngSignalr.HubFactory) {
    return new CommentHubFactory(CONSTANTS, Hub);
}

export {CommentHubFactory, getInstanceCommentHubFactory}
