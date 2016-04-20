interface IMyWindowService extends ng.IWindowService {
    google: any;
}

/** @ngInject */
function getInstanceGoogle(
    $window: IMyWindowService
) {
    return $window.google;
}

export {
    getInstanceGoogle
}
