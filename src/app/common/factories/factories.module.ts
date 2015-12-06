import { getInstanceGoogle } from './google/google';

export default angular
    .module('app.common.factories', [])
    .factory('google', getInstanceGoogle);
