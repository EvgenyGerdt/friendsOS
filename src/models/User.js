export class User {
    constructor(user) {
        this.email = user.email;
        this.personalData = user.personalData;
        this.online = user.online;
        this.id = user._id;
    }
}
