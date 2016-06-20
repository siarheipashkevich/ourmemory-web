import {AlbumModel} from './../models/album.model';

class AlbumDetailController {
    errors: any;
    submitted: boolean;
    sendingData: boolean = false;
    images: any;

    /** @ngInject */
    constructor(
        public album: AlbumModel
    ) {
        console.log(album);
        this.images = [];

        album.images.forEach((image: any) => {
            this.images.push({
                thumb: image.imageOriginal,
                img: image.imageOriginal
            });
        });

        angular.element('body').addClass('no-hidden no-touch');
        angular.element('body').removeClass('notransition');
    }
}

export {AlbumDetailController}
