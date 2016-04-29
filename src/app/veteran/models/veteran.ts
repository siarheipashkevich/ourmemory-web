export class VeteranImagesModel {
    // thubnailImage: string;
    constructor(public imageOriginal: string) {}
}

export class VeteranMarkerPositionModel {
    constructor(public latitude: number, public longitude: number) {}
}

export class VeteranMarkerModel {
    position: VeteranMarkerPositionModel;

    constructor(latitude: number, longitude: number) {
        this.position = new VeteranMarkerPositionModel(latitude, longitude);
    }
}

export class VeteranModel {
    public id: number;
    public firstName: number;
    public lastName: number;
    public middleName: number;
    public fullName: string;
    public dateBirth: string;
    public birthPlace: string;
    public awards: string;
    public troops: string;
    public called: string;
    public description: string;
    public marker: VeteranMarkerModel;
    public latitude: number;
    public longitude: number;
    public views: number;
    public images: Array<VeteranImagesModel>;

    constructor(data?: any) {
        this.images = [];

        if (data) {
            this.id = data.id;
            this.firstName = data.firstName;
            this.lastName = data.lastName;
            this.middleName = data.middleName;
            this.fullName = data.fullName;
            this.dateBirth = data.dateBirth;
            this.birthPlace = data.birthPlace;
            this.awards = data.awards;
            this.troops = data.troops;
            this.called = data.called;
            this.description = data.description;
            this.marker = new VeteranMarkerModel(data.latitude, data.longitude);
            this.latitude = data.latitude;
            this.longitude = data.longitude;
            this.views = data.views;

            data.images.forEach((image: VeteranImagesModel) => {
                this.images.push(new VeteranImagesModel(image.imageOriginal));
            });
        }
    }
}

export class VeteranListModel {
    veterans: Array<VeteranModel>;
    totalCount: number;

    constructor(veterans: Array<any>, totalCount: number) {
        this.veterans = [];
        this.totalCount = totalCount;

        veterans.forEach((veteranData: any) => {
            this.veterans.push(new VeteranModel(veteranData));
        });
    }
}
