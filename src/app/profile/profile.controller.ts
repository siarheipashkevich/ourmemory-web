import {UploadFactory} from './../common/factories/upload/upload.factory';

class ProfileController {
    user: any;

    /** @ngInject */
    constructor(
        private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
        private UploadFactory: UploadFactory
    ) {

    }

    closeModal() {
        this.$uibModalInstance.dismiss();
    }

    uploadImage(file: File) {
        if (file) {
            this.UploadFactory.upload(file).then((image: any) => {
                this.user.image = image.imageOriginal;
            });
        }
    }
}

export {ProfileController}
