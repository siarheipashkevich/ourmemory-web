import { VeteranFactory } from '../veteran.factory';

class VeteranModalController {
    public veteran: any;
    public uploadVeteranData: boolean = false;
    public datePicker: any;

    /** @ngInject */
    constructor(
        private $uibModalInstance: any,
        private VeteranFactory: VeteranFactory
    ) {
        this.datePicker = {
            status: {
                opened: {
                    called: false,
                    dataBirth: false,
                    dateDeath: false
                }
            }
        };
    }

    createVeteran() {
        this.uploadVeteranData = true;

        this.VeteranFactory.saveVeteran(this.veteran).then((resp: any) => {
            this.$uibModalInstance.close(resp.data);
        }, (resp: any) => {
            console.log('Error statusasd: ' + resp.status);
        });
    }

    openDatePicker(index: string) {
        this.datePicker.status.opened[index] = true;
    }

    closeModal() {
        this.$uibModalInstance.dismiss();
    }

    removeImage(index: number) {
        if (this.veteran.images[index]) {
            this.veteran.images.splice(index, 1);
        }
    }
}

export {
    VeteranModalController
}
