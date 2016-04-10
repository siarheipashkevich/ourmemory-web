import {homeRoute} from './home.route';
import {HomeController} from './home.controller';

export default angular
    .module('app.home', [])
    .config(homeRoute)
    .controller('HomeController', HomeController);
