export class Veteran {
    public id: number;
    public images: Array<string>;
    public fullName: string;
    public birthPlace: string;
    public dateBirth: string;
    public awards: string;
    public called: string;
    public description: string;

    constructor() {
        this.images = [];
    }
}
