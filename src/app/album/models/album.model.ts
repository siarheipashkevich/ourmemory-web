import {UserModel} from './../../user/models/user.model';

export class AlbumImagesModel {
    constructor(public imageOriginal: string, public thubnailImage: string) {}
}

export class AlbumModel {
    id: number;
    title: string;
    views: number;
    description: string;
    image: string;
    countPhoto: number;
    user: UserModel;
    images: Array<AlbumImagesModel>;

    constructor(data?: any) {
        this.images = [];

        if (data) {
            this.id = data.id;
            this.title = data.title;
            this.views = data.views;
            this.image = data.image;
            this.description = data.description;
            this.countPhoto = data.countPhoto;
            this.user = new UserModel(data.user);

            if (data.images) {
                data.images.forEach((image: AlbumImagesModel) => {
                    this.images.push(new AlbumImagesModel(image.imageOriginal, image.thubnailImage));
                });
            }
        }
    }
}

export class AlbumListModel {
    albums: Array<AlbumModel>;
    totalCount: number;

    constructor(albums: Array<any>, totalCount: number) {
        this.albums = [];
        this.totalCount = totalCount;

        albums.forEach((albumData: any) => {
            this.albums.push(new AlbumModel(albumData));
        });
    }
}
