import {albumRoute} from './album.route';
import {AlbumListController} from './controllers/album-list.controller';
import {AlbumDetailController} from './controllers/album-detail.controller';
import {AlbumSaveController} from './controllers/album-save.controller';
import {getInstanceAlbumFactory} from './album.factory';

export default angular
    .module('app.album', ['jkuri.gallery'])
    .config(albumRoute)
    .factory('AlbumFactory', getInstanceAlbumFactory)
    .controller('AlbumListController', AlbumListController)
    .controller('AlbumDetailController', AlbumDetailController)
    .controller('AlbumSaveController', AlbumSaveController);
