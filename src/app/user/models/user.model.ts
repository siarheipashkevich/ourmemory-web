export class UserModel {
    id: number;
    name: string;
    image: string;

    constructor(data?: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.image = data.image;
        }
    }
}
