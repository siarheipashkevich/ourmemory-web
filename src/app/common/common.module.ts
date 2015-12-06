import CommonFactories from './factories/factories.module';
import CommonDirectives from './directives/directives.module';

export default angular
    .module('app.common', [
        CommonFactories.name,
        CommonDirectives.name
    ]);
