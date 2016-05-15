import {AlbumModel} from './../models/album.model';
import {AlbumFactory} from './../album.factory';

class AlbumSaveController {
    album: any;
    title: string;
    btnSaveText: string;
    articleForm: any;
    submitted: boolean;
    sendingData: boolean = false;
    errorMessage: string;

    /** @ngInject */
    constructor(
        private $translate: ng.translate.ITranslateService,
        private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
        private AlbumFactory: AlbumFactory
    ) {
        this.title = $translate.instant('album.modal.title.add');
        this.btnSaveText = $translate.instant('album.modal.btn.add');
    }

    closeModal() {
        this.$uibModalInstance.dismiss();
    }

    saveAlbum(isValidForm: boolean) {
        this.submitted = true;

        if (!isValidForm) {
            return false;
        }

        this.sendingData = true;

        this.AlbumFactory.saveAlbum(this.album).then(
            (album: AlbumModel) => {
                this.$uibModalInstance.close(album);
            },
            (response: any) => {
                this.sendingData = false;
                this.errorMessage = response.statusText;
            }
        );
    }
}

export {AlbumSaveController}
