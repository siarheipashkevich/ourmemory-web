class UploadFactory {
    private link: string;

    constructor(
        private Upload: any,
        private CONSTANTS: any
    ) {
        this.link = CONSTANTS.API_URL + 'files';
    }

    upload(file: File): ng.IPromise<any> {
        return this.Upload.upload({
            url: this.link,
            data: {file: file}
        }).then((response: any) => response.data.images[0]);
    }
}

/** @ngInject */
function getInstanceUploadFactory(
    Upload: any,
    CONSTANTS: any
) {
    return new UploadFactory(Upload, CONSTANTS);
}

export {UploadFactory, getInstanceUploadFactory}
