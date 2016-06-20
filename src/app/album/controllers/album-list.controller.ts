import {AlbumListModel, AlbumModel} from './../models/album.model';
import {AlbumFactory} from './../album.factory';
import {IConfirmDialog} from './../../common/services/confirm-dialog/confirm-dialog.service';

class AlbumListController {
    /** @ngInject */
    constructor(
        private $uibModal: any,
        private AlbumFactory: AlbumFactory,
        private ConfirmDialog: IConfirmDialog,
        public albumList: AlbumListModel
    ) {
        angular.element('body').addClass('no-hidden no-touch');
        angular.element('body').removeClass('notransition');
    }

    saveAlbum(album?: AlbumModel) {
        this.$uibModal.open({
            templateUrl: 'app/album/templates/album-save.tpl.html',
            controller: 'AlbumSaveController',
            controllerAs: 'vm',
            animation: true,
            backdrop: 'static',
            size: 'lg',
            resolve: {
                album: () => {
                    return album;
                }
            }
        }).result.then((album: AlbumModel) => {
            if (angular.isDefined(album)) {
                let foundIndex = -1;

                for (let i = 0; i < this.albumList.albums.length; i++) {
                    if (this.albumList.albums[i].id === album.id) {
                        foundIndex = i;
                        break;
                    }
                }

                if (foundIndex !== -1) {
                    this.albumList.albums[foundIndex] = album;
                } else {
                    this.albumList.albums.unshift(album);
                }
            }
        });
    }

    editAlbum($event: ng.IAngularEvent, album: AlbumModel) {
        $event.preventDefault();
        $event.stopPropagation();

        this.saveAlbum(angular.copy(album));
    }

    deleteAlbum($event: ng.IAngularEvent, id: number, index: number) {
        $event.preventDefault();
        $event.stopPropagation();

        this.ConfirmDialog.confirm({
            message: 'confirm.message',
            btn: {
                ok: 'confirm.btn.ok',
                cancel: 'confirm.btn.cancel'
            }
        }).then(() => {
            this.AlbumFactory.deleteAlbum(id).then(() => {
                this.albumList.albums.splice(index, 1);
            });
        });
    }
}

export {AlbumListController}
