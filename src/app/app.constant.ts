class AppConstants {
    static URL: string = 'http://192.168.1.4:8080';
    static API_URL: string = AppConstants.URL + '/api/';
    static GOOGLE_API_KEY = 'AIzaSyBj_8irNCw58V9JCHQTanfWZUVCU0r2flY';

    static SERVER_IS_ENABLED = 1;
    static APP_VERSION: string = '0.0.1';
    static ICON_DEFAULT_MARKER: string = 'assets/images/marker-blue.png';
    static ICON_NEW_MARKER: string = 'assets/images/marker-new.png';
    static PAGINATION: any = {
        MAX_ITEMS_TO_PAGE: 6
    };
    static DEFAULT_VETERAN_IMAGE: string = 'http://walyou.com/wp-content/uploads//2010/12/facebook-profile-picture-no-pic-avatar.jpg';
}

export {AppConstants}
