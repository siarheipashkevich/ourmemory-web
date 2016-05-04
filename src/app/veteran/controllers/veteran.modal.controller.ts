import {VeteranFactory} from '../veteran.factory';
import {VeteranModel} from '../models/veteran';
import {UploadFactory} from './../../common/factories/upload/upload.factory';

class VeteranModalController {
    public sendingData: boolean = false;
    public errorMessage: string;
    public uploadImage: boolean = false;
    public datePicker: any;
    public title: string;
    public btnSaveText: string;
    public saveVeteranForm: any;
    public submitted: boolean;

    /** @ngInject */
    constructor(
        private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
        private $log: ng.ILogService,
        private $q: ng.IQService,
        private $translate: ng.translate.ITranslateService,
        private VeteranFactory: VeteranFactory,
        private UploadFactory: UploadFactory,
        private veteran: VeteranModel
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
            this.veteran = new VeteranModel();

            this.title = $translate.instant('veteran.modal.title.add');
            this.btnSaveText = $translate.instant('veteran.modal.btn.add');
        } else {
            this.title = $translate.instant('veteran.modal.title.edit');
            this.btnSaveText = $translate.instant('veteran.modal.btn.edit');
        }
    }

    saveVeteran(isValidForm: boolean) {
        this.submitted = true;

        if (!isValidForm) {
            return false;
        }

        this.sendingData = true;

        this.VeteranFactory.saveVeteran(this.veteran).then(
            (veteran: VeteranModel) => {
                this.$uibModalInstance.close(veteran);
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
            let promises: Array<ng.IPromise<any>> = [];

            this.uploadImage = true;

            angular.forEach(files, (file: File) => {
                promises.push(this.UploadFactory.upload(file).then((image: any) => {
                    this.veteran.images.push(image);
                }));
            });

            this.$q.all(promises).finally(() => {
                this.uploadImage = false;
            });
        }
    }
}

export {VeteranModalController}
