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
    public images: VeteranImagesModel[];

    constructor(data: any) {
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
        this.images = [];
        this.marker = new VeteranMarkerModel(data.latitude, data.longitude);

        data.images.forEach((image: VeteranImagesModel) => {
            this.images.push(new VeteranImagesModel(image.imageOriginal));
        });
    }
}

export class VeteranListModel {
    veterans: VeteranModel[];
    totalCount: number;

    constructor(veterans: Array<any>, totalCount: number) {
        this.veterans = [];
        this.totalCount = totalCount;

        veterans.forEach((veteranData: any) => {
            this.veterans.push(new VeteranModel(veteranData));
        });
    }
}
