import { getInstanceGoogle } from './google/google';
import { getInstanceUploadFactory } from './upload/upload.factory';

export default angular
    .module('app.common.factories', [])
    .factory('google', getInstanceGoogle)
    .factory('UploadFactory', getInstanceUploadFactory);
