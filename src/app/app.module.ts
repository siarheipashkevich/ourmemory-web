/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { appRun } from './app.run';
import { CONSTANTS } from './app.constant';

import HomeModule from './home/home.module';
import CoreModule from './core/core.module';
import AuthModule from './auth/auth.module';
import NavigationModule from './navigation/navigation.module';

angular
    .module('ourmemory', [
        CoreModule.name,
        HomeModule.name,
        AuthModule.name,
        NavigationModule.name
    ])
    .constant('CONSTANTS', CONSTANTS)
    .run(appRun);
