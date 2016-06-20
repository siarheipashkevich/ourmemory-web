import {AlbumModel} from './../models/album.model';
import {AlbumFactory} from './../album.factory';
import {UploadFactory} from './../../common/factories/upload/upload.factory';

class AlbumSaveController {
    title: string;
    btnSaveText: string;
    articleForm: any;
    submitted: boolean;
    sendingData: boolean = false;
    errorMessage: string;
    uploadImage: boolean = false;

    /** @ngInject */
    constructor(
        private $translate: ng.translate.ITranslateService,
        private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
        private $q: ng.IQService,
        private UploadFactory: UploadFactory,
        private AlbumFactory: AlbumFactory,
        private album: any
    ) {
        if (!album) {
            this.album = new AlbumModel();

            this.title = $translate.instant('album.modal.title.add');
            this.btnSaveText = $translate.instant('album.modal.btn.add');
        } else {
            this.title = $translate.instant('veteran.modal.title.edit');
            this.btnSaveText = $translate.instant('veteran.modal.btn.edit');

            if (this.album.images.length) {
                this.album.images = this.album.images.map((image: any) => {
                    if (image.imageOriginal === this.album.image) {
                        image.selected = true;
                    }

                    return image;
                });
            }
        }
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

    uploadImages(files: FileList) {
        if (files && files.length) {
            let promises: Array<ng.IPromise<any>> = [];

            this.uploadImage = true;

            angular.forEach(files, (file: File) => {
                promises.push(this.UploadFactory.upload(file).then((image: any) => {
                    this.album.images.push(image);
                }));
            });

            this.$q.all(promises).finally(() => {
                this.uploadImage = false;

                if (this.album.images.length) {
                    let isSelected = this.album.images.some((image: any) => {
                        return image.selected;
                    });

                    if (!isSelected) {
                        this.album.images[0].selected = true;

                        this.album.image = this.album.images[0].imageOriginal;
                    }
                }
            });
        }
    }

    deleteImage(index: number) {
        if (this.album.images[index]) {
            if (this.album.images[index].selected && this.album.images.length - 1 > 0) {
                this.album.images[index === 0 ? 1 : 0].selected = true;

                this.album.image = this.album.images[index === 0 ? 1 : 0].imageOriginal;
            }

            this.album.images.splice(index, 1);
        }
    }

    markMainImage(index: number) {
        if (this.album.images.length) {
            this.album.images.map((image: any, key: number) => {
                image.selected = key === index ? true : false;

                return image;
            });

            this.album.images.forEach((image: any) => {
                if (image.selected) {
                    this.album.image = image.imageOriginal;
                }
            });
        }
    }
}

export {AlbumSaveController}
