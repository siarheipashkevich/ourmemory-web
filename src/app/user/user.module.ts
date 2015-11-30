import { getInstanceUserFactory } from './user.factory';

export default angular
    .module('app.user', [])
    .factory('UserFactory', getInstanceUserFactory);
