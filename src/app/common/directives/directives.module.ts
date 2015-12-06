import { googlePlaceAutocomplete } from './google-place-autocomplete/google-place-autocomplete';
import { googleMap } from './google-map/google-map';
import { resizeDirective } from './resize/resize';

export default angular
    .module('app.common.directives', [])
    .directive('googlePlaceAutocomplete', googlePlaceAutocomplete)
    .directive('googleMap', googleMap)
    .directive('resize', resizeDirective);
