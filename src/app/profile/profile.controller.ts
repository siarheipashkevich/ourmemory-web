import {UploadFactory} from './../common/factories/upload/upload.factory';
import {ProfileFactory} from './../profile/profile.factory';
import {AuthService} from './../auth/auth.service';

class ProfileController {
    user: any;
    password: any;
    errors: any;
    tempPhoto: any;
    uploadNewPhotoActive: boolean;
    submitted: boolean;
    sendingData: boolean = false;

    /** @ngInject */
    constructor(
        private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
        private $rootScope: any,
        private $timeout: ng.ITimeoutService,
        private $translate: ng.translate.ITranslateService,
        private toastr: ng.toastr.IToastrService,
        private Upload: any,
        private UploadFactory: UploadFactory,
        private ProfileFactory: ProfileFactory,
        private AuthService: AuthService
    ) {
        this.user = {};
        this.user.image = $rootScope.authUser.image;
        this.user.firstName = $rootScope.authUser.firstName;
        this.user.lastName = $rootScope.authUser.lastName;
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
                this.$rootScope.authUser.firstName = this.user.firstName;
                this.$rootScope.authUser.lastName = this.user.lastName;
                this.$rootScope.authUser.image = this.user.image;

                this.AuthService.setAuthUser(this.$rootScope.authUser);

                this.$uibModalInstance.close();
            },
            () => {
                this.sendingData = false;
            }
        );
    }

    changePassword(passwordForm: ng.IFormController) {
        if (passwordForm.$valid) {
            this.ProfileFactory.changePassword(this.password).then(() => {
                passwordForm.$setPristine();
                passwordForm.$setUntouched();

                this.$timeout(() => { this.password = {}; });

                this.toastr.success(this.$translate.instant('profile.messages.passwordSuccessfullyChanged'));
            }, (response: any) => {
                this.toastr.error(response.data.message);

                this.validateErrorResponse(response.data);
            });
        }
    }

    validateErrorResponse(error: any) {
        this.errors = {};

        if (error.modelState) {
            angular.forEach(error.modelState, (value: string, key: string) => {
                key = key.replace('model.', '');
                key = key.charAt(0).toLowerCase() + key.slice(1);

                this.errors[key] = value;
            }, this);
        }
    }
}

export {ProfileController}
