import {UploadFactory} from './../common/factories/upload/upload.factory';
import {ProfileFactory} from './../profile/profile.factory';
import {AuthService} from './../auth/auth.service';

class ProfileController {
    user: any;
    tempPhoto: any;
    uploadNewPhotoActive: boolean;
    submitted: boolean;
    sendingData: boolean = false;

    /** @ngInject */
    constructor(
        private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
        private $rootScope: any,
        private Upload: any,
        private UploadFactory: UploadFactory,
        private ProfileFactory: ProfileFactory,
        private AuthService: AuthService
    ) {
        this.user = {};
        this.user.image = $rootScope.authUser.imageUrl;
    }

    closeModal() {
        this.$uibModalInstance.dismiss();
    }

    selectImage(file: File) {
        if (file) {
            this.tempPhoto = file;
            this.uploadNewPhotoActive = true;
        }
    }

    uploadImage(dataUrl: any, name: string) {
        let file = this.Upload.dataUrltoBlob(dataUrl, name);

        if (file) {
            this.UploadFactory.upload(file).then((image: any) => {
                this.user.image = image.imageOriginal;

                this.$rootScope.authUser.imageUrl = image.imageOriginal;
                this.AuthService.setAuthUser(this.$rootScope.authUser);

                this.uploadNewPhotoActive = false;
                this.tempPhoto = null;
            });
        }
    }

    uploadNewPhoto() {
        this.uploadNewPhotoActive = true;
    }

    backPhoto() {
        this.uploadNewPhotoActive = false;
        this.tempPhoto = null;
    }


    updateProfile(isValidForm: boolean) {
        this.submitted = true;

        if (!isValidForm) {
            return false;
        }

        this.sendingData = true;

        this.ProfileFactory.updateProfile(this.user).then(
            () => {
                this.$uibModalInstance.close();
            },
            () => {
                this.sendingData = false;
            }
        );
    }
}

export {ProfileController}
