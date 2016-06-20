import {ArticleModel} from './../models/article.model';
import {ArticleFactory} from './../article.factory';
import {UploadFactory} from './../../common/factories/upload/upload.factory';
import {ITranslationService} from './../../translation/translation.provider';

class ArticleSaveController {
    title: string;
    btnSaveText: string;
    submitted: boolean;
    sendingData: boolean = false;
    errorMessage: string;
    froalaOptions: any;

    /** @ngInject */
    constructor(
        private $translate: ng.translate.ITranslateService,
        private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
        private $log: ng.ILogService,
        private UploadFactory: UploadFactory,
        private ArticleFactory: ArticleFactory,
        private TranslationService: ITranslationService,
        private article: ArticleModel
    ) {
        console.log(article);

        if (!article) {
            this.article = new ArticleModel();

            this.title = $translate.instant('article.modal.title.add');
            this.btnSaveText = $translate.instant('article.modal.btn.add');
        } else {
            this.title = $translate.instant('article.modal.title.edit');
            this.btnSaveText = $translate.instant('article.modal.btn.edit');
        }

        this.froalaOptions = {
            language: TranslationService.getLanguageKey(),
            heightMin: 200,
            placeholderText: $translate.instant('article.modal.form.fullDescription.placeholder')
        };
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
            });
        }
    }
}

export {ArticleSaveController}
