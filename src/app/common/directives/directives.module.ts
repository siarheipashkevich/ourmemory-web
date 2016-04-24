import {omAutocomplete} from './om-autocomplete/om-autocomplete';
import {resizeDirective} from './resize/resize';
import {dotDotDot} from './dotdotdot/dotdotdot';
import {dropdown} from './dropdown/dropdown';
import {omMarkerPosition} from './om-marker-position/om-marker-position';

export default angular
    .module('app.common.directives', [])
    .directive('omAutocomplete', omAutocomplete)
    .directive('omMarkerPosition', omMarkerPosition)
    .directive('resize', resizeDirective)
    .directive('dotDotDot', dotDotDot)
    .directive('omDropdown', dropdown);
