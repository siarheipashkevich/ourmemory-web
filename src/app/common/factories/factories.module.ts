import {getInstanceGoogle} from './google/google';
import {getInstanceUploadFactory} from './upload/upload.factory';
import {getInstanceCommentHubFactory} from './hubs/comment-hub.factory';

export default angular
    .module('app.common.factories', [])
    .factory('google', getInstanceGoogle)
    .factory('UploadFactory', getInstanceUploadFactory)
    .factory('CommentHubFactory', getInstanceCommentHubFactory);
