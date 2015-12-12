import { MapService } from './google-map/map.service';
import { ConfirmDialog } from './confirm-dialog/confirm-dialog.service';

export default angular
    .module('app.common.services', [])
    .service('MapService', MapService)
    .service('ConfirmDialog', ConfirmDialog);
