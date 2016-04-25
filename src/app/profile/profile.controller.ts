class ProfileController {
    private title: string;

    /** @ngInject */
    constructor() {
        this.title = 'Страница пользователя';
    }

    getTitle() {
        return this.title;
    }
}

export {ProfileController}
