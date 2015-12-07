import { veteranRoute } from './veteran.route';
import { VeteranController } from './veteran.controller';
import { VeteranModalController } from './controllers/veteran.modal.controller';
import { getInstanceVeteranFactory } from './veteran.factory';
import { VeteranDetailController } from './controllers/veteran-detail.controller';

export default angular
    .module('app.veteran', [])
    .config(veteranRoute)
    .factory('VeteranFactory', getInstanceVeteranFactory)
    .controller('VeteranController', VeteranController)
    .controller('VeteranModalController', VeteranModalController)
    .controller('VeteranDetailController', VeteranDetailController);
