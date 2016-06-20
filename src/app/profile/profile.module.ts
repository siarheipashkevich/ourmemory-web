import {ProfileController} from './profile.controller';
import {getInstanceProfileFactory} from './profile.factory';

export default angular
    .module('app.profile', [])
    .factory('ProfileFactory', getInstanceProfileFactory)
    .controller('ProfileController', ProfileController);
