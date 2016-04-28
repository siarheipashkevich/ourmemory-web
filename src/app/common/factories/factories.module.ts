import {getInstanceGoogle} from './google/google';
import {getInstanceUploadFactory} from './upload/upload.factory';
import {getInstanceGoogleMapsApiFactory} from './google/google-maps-api.factory';

export default angular
    .module('app.common.factories', [])
    .factory('google', getInstanceGoogle)
    .factory('UploadFactory', getInstanceUploadFactory)
    .factory('GoogleMapsApiFactory', getInstanceGoogleMapsApiFactory);
