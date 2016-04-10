import { HeaderController } from './header.controller';
import { headerDirective } from './header.directive';

export default angular
    .module('app.navigation.header', [])
    .controller('HeaderController', HeaderController)
    .directive('header', headerDirective);
