import {AlbumListModel} from './../models/album.model';
import {AlbumFactory} from './../album.factory';

class AlbumListController {
    /** @ngInject */
    constructor(
        private $uibModal: any,
        private AlbumFactory: AlbumFactory,
        public albumList: AlbumListModel
    ) {
        console.log(albumList);

        angular.element('body').addClass('no-hidden no-touch');
        angular.element('body').removeClass('notransition');
    }

    addAlbum() {
        this.$uibModal.open({
            templateUrl: 'app/album/templates/album-save.tpl.html',
            controller: 'AlbumSaveController',
            controllerAs: 'vm',
            animation: true,
            backdrop: 'static',
            size: 'lg'
        });
    }
}

export {AlbumListController}
