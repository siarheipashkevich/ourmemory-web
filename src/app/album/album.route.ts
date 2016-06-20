import {AlbumFactory} from './album.factory';

/** @ngInject */
function albumRoute($stateProvider: ng.ui.IStateProvider, AUTH_ROLES: any) {
    $stateProvider
        .state('main.albums', {
            url: 'albums',
            abstract: true,
            templateUrl: 'app/album/templates/album.tpl.html'
        })
        .state('main.albums.list', {
            url: '',
            templateUrl: 'app/album/templates/album-list.tpl.html',
            controller: 'AlbumListController',
            controllerAs: 'vm',
            resolve: {
                /** @ngInject */
                albumList: (AlbumFactory: AlbumFactory) => {
                    return AlbumFactory.getAlbums();
                }
            },
            data: {
                allow: [AUTH_ROLES.all]
            }
        })
        .state('main.albums.detail', {
            url: '/{id:int}',
            templateUrl: 'app/album/templates/album-detail.tpl.html',
            controller: 'AlbumDetailController',
            controllerAs: 'vm',
            resolve: {
                /** @ngInject */
                album: ($stateParams: any, AlbumFactory: AlbumFactory) => {
                    return AlbumFactory.getAlbum($stateParams.id);
                }
            },
            data: {
                allow: [AUTH_ROLES.all]
            }
        });
}

export {albumRoute}
