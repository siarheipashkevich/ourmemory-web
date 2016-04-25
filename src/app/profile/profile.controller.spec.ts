import {ProfileController} from './profile.controller';

describe('profile controller', () => {
    let mainController: ProfileController;

    beforeEach(angular.mock.module('ourmemory'));

    beforeEach(inject(($controller: ng.IControllerService) => {
        mainController = $controller('ProfileController');
    }));

    it('should have a title', () => {
        expect(mainController.getTitle()).toEqual('Страница пользователя');
    });
});
