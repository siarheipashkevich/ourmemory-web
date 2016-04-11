import {googlePlaceAutocomplete} from './google-place-autocomplete/google-place-autocomplete';
import {resizeDirective} from './resize/resize';
import {dotDotDot} from './dotdotdot/dotdotdot';
import {dropdown} from './dropdown/dropdown';

export default angular
    .module('app.common.directives', [])
    .directive('googlePlaceAutocomplete', googlePlaceAutocomplete)
    .directive('resize', resizeDirective)
    .directive('dotDotDot', dotDotDot)
    .directive('omDropdown', dropdown);
