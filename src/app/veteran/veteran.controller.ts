import {IMapService} from './../common/services/google-map/map.service';
import {IConfirmDialog} from './../common/services/confirm-dialog/confirm-dialog.service';
import {IVeteranService} from './veteran.service';
import {VeteranFactory} from './veteran.factory';

class VeteranController {
    veterans: Array<any> = [];
    gMap: any;
    showAdvancedFilter: boolean = false;
    search: Object;
    troopsList: Array<Object>;

    selected: any = {};

    totalCount: number;
    currentPage: number = 1;
    maxItemsToPage: number;

    /** @ngInject */
    constructor(
        private $uibModal: any,
        private $log: ng.ILogService,
        private MapService: IMapService,
        private VeteranService: IVeteranService,
        private VeteranFactory: VeteranFactory,
        private ConfirmDialog: IConfirmDialog,
        private CONSTANTS: any
    ) {
        angular.element('body').addClass('no-touch');
        angular.element('body').removeClass('notransition');

        this.search = VeteranService.getDefaultSearchOptions();

        this.troopsList = VeteranService.getTroopsList();
        this.maxItemsToPage = CONSTANTS.PAGINATION.MAX_ITEMS_TO_PAGE;

        let params = {page: 1, size: this.maxItemsToPage};
        this.getVeteransData(params);

        this.gMap = MapService.getSettingsGoogleMaps();
    }

    showWindowVeteran(veteran: any) {
        this.gMap.window.veteran = angular.extend({}, veteran);
        this.gMap.window.position = veteran.marker.position;
        this.gMap.window.show = true;
    }

    hideWindowVeteran() {
        this.gMap.window.show = false;
        this.gMap.window.veteran = {};
    }

    getVeteransData(params: any) {
        params = this.VeteranService.prepareSearchParams(params);

        this.VeteranFactory.getVeterans(params).then((response: any) => {
            this.VeteranService.setMarkerOptionsToVeterans(response.items);

            this.veterans.length = 0;
            this.totalCount = response.totalCount;

            this.veterans.push(...response.items);
        });
    }

    showModalSaveVeteran(veteran?: any) {
        this.$uibModal.open({
            templateUrl: 'app/veteran/templates/modals/create.html',
            controller: 'VeteranModalController',
            controllerAs: 'vm',
            animation: true,
            backdrop: 'static',
            resolve: {
                veteran: () => {
                    return veteran;
                }
            }
        }).result.then((veteran: any) => {
            if (angular.isDefined(veteran)) {
                var foundIndex: number = this.VeteranService.getArrayIndexByVeteranId(this.veterans, veteran.id);

                this.VeteranService.setMarkerOptionsToVeteran(veteran);

                if (angular.isNumber(foundIndex)) {
                    this.veterans[foundIndex] = veteran;
                } else {
                    if (this.veterans.length >= this.CONSTANTS.PAGINATION.MAX_ITEMS_TO_PAGE) {
                        this.veterans.pop();
                    }
                    this.veterans.unshift(veteran);

                    this.totalCount++;
                }
            }
        }, () => {
            this.$log.info('Модальное окно закрыто:  ' + new Date());
        });
    }

    deleteVeteran($event: ng.IAngularEvent, id: number) {
        $event.stopPropagation();

        this.ConfirmDialog.confirm({
            message: 'Вы действительно хотите удалить ветерана?',
            btn: {
                ok: 'Да',
                cancel: 'Нет'
            }
        }).then(() => {
            var params = {
                page: this.currentPage + 1,
                size: 1
            };

            this.VeteranFactory.getVeterans(params).then((response: any) => {
                if (response.data.items.length) {
                    this.VeteranService.setMarkerOptionsToVeteran(response.data.items[0]);

                    return response.data.items[0];
                }
            }).then((veteran: any) => {
                return this.VeteranFactory.deleteVeteran(id).then(() => {
                    var foundIndex: number = this.VeteranService.getArrayIndexByVeteranId(this.veterans, id);

                    if (angular.isNumber(foundIndex)) {
                        this.veterans.splice(foundIndex, 1);
                    }

                    if (angular.isDefined(veteran)) {
                        this.veterans.push(veteran);
                    }

                    this.totalCount--;
                });
            }).catch((error: any) => {
                this.$log.error(error);
            });
        });
    }

    editVeteran($event: ng.IAngularEvent, veteran: any) {
        $event.stopPropagation();

        this.showModalSaveVeteran(angular.copy(veteran));
    }

    changePage() {
        this.search = Object.assign({}, this.search, {page: this.currentPage, size: this.maxItemsToPage});
        this.getVeteransData(this.search);
    }

    applySearch() {
        let resultParams = this.VeteranService.prepareSearchParams(this.search);

        console.log(resultParams);
    }
}

export {VeteranController}
