/// <reference path="../../typings/main.d.ts" />

import { appRun } from './app.run';
import { AppConstants } from './app.constant';

import CoreModule from './core/core.module';
import AuthModule from './auth/auth.module';
import CommonModule from './common/common.module';
import UserModule from './user/user.module';
import HomeModule from './home/home.module';
import NavigationModule from './navigation/navigation.module';
import VeteranModule from './veteran/veteran.module';
import ProfileModule from './profile/profile.module';
import ArticleModule from './article/article.module';

angular
    .module('ourmemory', [
        CoreModule.name,
        AuthModule.name,
        CommonModule.name,
        UserModule.name,
        HomeModule.name,
        NavigationModule.name,
        VeteranModule.name,
        ProfileModule.name,
        ArticleModule.name
    ])
    .constant('CONSTANTS', AppConstants)
    .run(appRun);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['ourmemory'], { strictDi: true });
});
