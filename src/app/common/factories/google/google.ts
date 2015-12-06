/** @ngInject */
function getInstanceGoogle(
    $window: any
) {
    return $window.google;
}

export {
    getInstanceGoogle
}
