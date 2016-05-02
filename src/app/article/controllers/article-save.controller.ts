class ArticleSaveController {
    fullDescription: string;

    /** @ngInject */
    constructor($timeout: any) {
        this.fullDescription = '';

        $timeout(() => {
            this.fullDescription = '<p>Hello There!</p>';
            //textAngularManager.refreshEditor('testEditor');
        }, 1000);

        console.log('ArticleSaveController');
    }
}

export {ArticleSaveController}
