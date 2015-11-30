/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { appRun } from './app.run';
import { CONSTANTS } from './app.constant';

import CoreModule from './core/core.module';
import HomeModule from './home/home.module';
import UserModule from './user/user.module';
import AuthModule from './auth/auth.module';
import NavigationModule from './navigation/navigation.module';

angular
    .module('ourmemory', [
        CoreModule.name,
        HomeModule.name,
        UserModule.name,
        AuthModule.name,
        NavigationModule.name
    ])
    .constant('CONSTANTS', CONSTANTS)
    .run(appRun);
