class ArticleController {
    private title: string;

    /** @ngInject */
    constructor() {
        this.title = 'Статьи';

        angular.element('body').addClass('no-hidden no-touch');
        angular.element('body').removeClass('notransition');
    }
}

export {
    ArticleController
}
