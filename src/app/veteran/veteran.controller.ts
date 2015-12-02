import { VeteranFactory } from './veteran.factory';

class VeteranController {
    private title: string;
    private veterans: any;

    /** @ngInject */
    constructor(VeteranFactory: VeteranFactory) {
        VeteranFactory.getVeteran().then((response: any) => {
            this.veterans = response.data;
        });

        this.title = 'Ветераны ВОВ';
    }
}

export {
    VeteranController
}
