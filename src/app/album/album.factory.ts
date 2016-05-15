import {AlbumModel, AlbumListModel} from './models/album.model';

class AlbumFactory {
    private link: string;

    /** @ngInject */
    static getInstance(
        $http: ng.IHttpService,
        CONSTANTS: any
    ) {
        return new AlbumFactory($http, CONSTANTS);
    }

    constructor(
        private $http: ng.IHttpService,
        private CONSTANTS: any
    ) {
        this.link = CONSTANTS.API_URL + 'photoAlbum';
    }

    getAlbums(params?: any): ng.IPromise<AlbumListModel> {
        return this.$http.get(this.link, {params}).then((response: any) => {
            return new AlbumListModel(response.data.items, response.data.totalCount);
        });
    }

    getAlbum(id: number): ng.IPromise<AlbumModel> {
        return this.$http.get(this.link + `/${id}`).then((response: any) => {
            return new AlbumModel(response.data);
        });
    }

    saveAlbum(album: AlbumModel): ng.IPromise<AlbumModel> {
        let saveAlbumPromise;

        if (album.id) {
            saveAlbumPromise = this.$http.put(this.link, album);
        } else {
            saveAlbumPromise = this.$http.post(this.link, album);
        }

        return saveAlbumPromise.then((response: any) => {
            return new AlbumModel(response.data);
        });
    }

    deleteAlbum(id: number) {
        return this.$http.delete(this.link + `/${id}`);
    }
}

export {AlbumFactory}
