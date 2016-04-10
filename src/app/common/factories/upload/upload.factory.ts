class UploadFactory {
    constructor(
        private Upload: any,
        private CONSTANTS: any
    ) {}

    upload(file: any): ng.IPromise<any> {
        return this.Upload.upload({
            url: this.CONSTANTS.API_URL + 'fileUpload',
            data: { file: file }
        });
    }
}

/** @ngInject */
function getInstanceUploadFactory(
    Upload: any,
    CONSTANTS: any
) {
    return new UploadFactory(Upload, CONSTANTS);
}

export {
    UploadFactory,
    getInstanceUploadFactory
}
