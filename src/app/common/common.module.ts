import CommonFactories from './factories/factories.module';
import CommonDirectives from './directives/directives.module';
import CommonServices from './services/services.module';
import CommonControllers from './controllers/controllers.module';

export default angular
    .module('app.common', [
        CommonFactories.name,
        CommonServices.name,
        CommonDirectives.name,
        CommonControllers.name
    ]);
