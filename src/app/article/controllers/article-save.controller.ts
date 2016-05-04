import {ArticleModel} from './../models/article.model';
import {ArticleFactory} from './../article.factory';
import {UploadFactory} from './../../common/factories/upload/upload.factory';

class ArticleSaveController {
    public article: ArticleModel;
    public title: string;
    public btnSaveText: string;
    public saveArticleForm: any;
    public submitted: boolean;
    public sendingData: boolean = false;
    public errorMessage: string;

    /** @ngInject */
    constructor(
        private $translate: ng.translate.ITranslateService,
        private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
        private $log: ng.ILogService,
        private UploadFactory: UploadFactory,
        private ArticleFactory: ArticleFactory
    ) {
        this.article = new ArticleModel();

        this.title = $translate.instant('article.modal.title.add');
        this.btnSaveText = $translate.instant('article.modal.btn.add');
    }

    closeModal() {
        this.$uibModalInstance.dismiss();
    }

    saveArticle(isValidForm: boolean) {
        this.submitted = true;

        if (!isValidForm) {
            return false;
        }

        this.sendingData = true;

        this.ArticleFactory.saveArticle(this.article).then(
            (article: ArticleModel) => {
                this.$uibModalInstance.close(article);
            },
            (response: any) => {
                this.sendingData = false;
                this.errorMessage = response.statusText;

                this.$log.error(response.statusText, response);
            }
        );
    }

    uploadImage(file: File) {
        if (file) {
            this.UploadFactory.upload(file).then((image: any) => {
                this.article.image = image.imageOriginal;
            })
        }
    }
}

export {ArticleSaveController}
