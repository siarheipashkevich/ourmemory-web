export class UserModel {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    image: string;

    constructor(data?: any) {
        if (data) {
            this.id = data.id;
            this.username = data.username;
            this.firstName = data.firstName;
            this.lastName = data.lastName;
            this.image = data.image;
        }
    }
}
