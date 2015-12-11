import { MapService } from './google-map/map.service';

export default angular
    .module('app.common.services', [])
    .service('MapService', MapService);
