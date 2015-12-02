import { veteranRoute } from './veteran.route';
import { VeteranController } from './veteran.controller';
import { getInstanceVeteranFactory } from './veteran.factory';

export default angular
    .module('app.veteran', [])
    .config(veteranRoute)
    .factory('VeteranFactory', getInstanceVeteranFactory)
    .controller('VeteranController', VeteranController);
