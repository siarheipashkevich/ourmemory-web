import {VeteranFactory} from '../veteran.factory';
import {Veteran} from '../models/veteran';
import {UploadFactory} from './../../common/factories/upload/upload.factory';

class VeteranModalController {
    public sendingData: boolean = false;
    public errorMessage: string;
    public uploadImage: boolean = false;
    public datePicker: any;
    public title: string;
    public btnSaveText: string;

    /** @ngInject */
    constructor(
        private $uibModalInstance: any,
        private $log: ng.ILogService,
        private VeteranFactory: VeteranFactory,
        private UploadFactory: UploadFactory,
        private veteran: Veteran
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

        if (!veteran) {
            // start dangers
            this.veteran = new Veteran();
            this.veteran.images = [];
            // end dangers

            this.title = 'Добавление ветерана';
            this.btnSaveText = 'Добавить';
        } else {
            this.title = 'Редактирование данных о ветеране';
            this.btnSaveText = 'Редактировать';
        }
    }

    saveVeteran() {
        this.sendingData = true;

        this.VeteranFactory.saveVeteran(this.veteran).then(
            (response: any) => {
                this.$uibModalInstance.close(response.data);
            },
            (response: any) => {
                this.sendingData = false;
                this.errorMessage = response.statusText;

                this.$log.error(response.statusText, response);
            }
        );
    }

    openDatePicker(index: string) {
        this.datePicker.status.opened[index] = true;
    }

    closeModal() {
        this.$uibModalInstance.dismiss();
    }

    deleteImage(index: number) {
        if (this.veteran.images[index]) {
            this.veteran.images.splice(index, 1);
        }
    }

    uploadImages(files: FileList) {
        if (files && files.length) {
            let promises: Array<any> = [];

            this.uploadImage = true;

            angular.forEach(files, (file: File) => {
                promises.push(this.UploadFactory.upload(file).then((image: any) => {
                    this.veteran.images.push(image);
                }));
            });

            Promise.all(promises).then(() => { this.uploadImage = false; });
        }
    }
}

export {VeteranModalController}
