class AppConstants {
    static URL: string = 'http://192.168.1.2:8080';
    static API_URL: string = AppConstants.URL + '/api/';

    static SERVER_IS_ENABLED = 1;
    static APP_VERSION: string = '0.0.1';
    static ICON_DEFAULT_MARKER: string = 'assets/images/marker-blue.png';
    static PAGINATION: any = {
        MAX_ITEMS_TO_PAGE: 2
    };
    static DEFAULT_VETERAN_IMAGE: string = 'http://walyou.com/wp-content/uploads//2010/12/facebook-profile-picture-no-pic-avatar.jpg';
}

export {
    AppConstants
}
