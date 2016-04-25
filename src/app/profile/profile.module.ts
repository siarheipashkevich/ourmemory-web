import {profileRoute} from './profile.route';
import {ProfileController} from './profile.controller';

export default angular
    .module('app.profile', [])
    .config(profileRoute)
    .controller('ProfileController', ProfileController);
