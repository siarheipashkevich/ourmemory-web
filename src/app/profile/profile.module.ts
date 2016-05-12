import {ProfileController} from './profile.controller';
import {ProfileFactory} from './profile.factory';

export default angular
    .module('app.profile', [])
    .controller('ProfileController', ProfileController)
    .factory('ProfileFactory', ProfileFactory.getInstance);
