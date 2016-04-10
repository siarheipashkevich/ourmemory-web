import { googlePlaceAutocomplete } from './google-place-autocomplete/google-place-autocomplete';
import { resizeDirective } from './resize/resize';
import { dotDotDot } from './dotdotdot/dotdotdot';

export default angular
    .module('app.common.directives', [])
    .directive('googlePlaceAutocomplete', googlePlaceAutocomplete)
    .directive('resize', resizeDirective)
    .directive('dotDotDot', dotDotDot);
