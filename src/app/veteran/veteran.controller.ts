import {IMapService} from './../common/services/google-map/map.service';
import {IConfirmDialog} from './../common/services/confirm-dialog/confirm-dialog.service';
import {IVeteranService} from './veteran.service';
import {VeteranFactory} from './veteran.factory';
import {VeteranModel, VeteranListModel} from './models/veteran';

class VeteranController {
    veterans: Array<any> = [];
    totalCount: number;
    gMap: any;
    showAdvancedFilter: boolean = true;
    search: Object;
    troopsList: Array<Object>;

    loading: boolean;

    selected: any = {};
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

    getVeteransData(params: any) {
        this.loading = true;

        this.VeteranService.getVeterans(params, !this.showAdvancedFilter).then((veteranList: VeteranListModel) => {
            this.veterans = veteranList.veterans;
            this.totalCount = veteranList.totalCount;

            this.loading = false;
        });
    }

    showModalSaveVeteran(veteran?: VeteranModel) {
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
        }).result.then((veteran: VeteranModel) => {
            if (angular.isDefined(veteran)) {
                var foundIndex = this.VeteranService.getArrayIndexByVeteranId(this.veterans, veteran.id);

                if (foundIndex !== -1) {
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
            message: 'confirm.message',
            btn: {
                ok: 'confirm.btn.ok',
                cancel: 'confirm.btn.cancel'
            }
        }).then(() => {
            var params = {
                page: this.currentPage + 1,
                size: 1
            };

            this.VeteranFactory.getVeterans(params).then((veteranList: VeteranListModel) => {
                if (veteranList.veterans.length) {
                    return veteranList.veterans[0];
                }
            }).then((veteran: VeteranModel|void) => {
                return this.VeteranFactory.deleteVeteran(id).then(() => {
                    let foundIndex = this.VeteranService.getArrayIndexByVeteranId(this.veterans, id);

                    if (foundIndex !== -1) {
                        this.veterans.splice(foundIndex, 1);
                    }

                    if (angular.isDefined(veteran)) {
                        this.veterans.push(veteran);
                    }

                    this.totalCount--;
                });
            }).catch((error: Error) => {
                this.$log.error(error);
            });
        });
    }

    editVeteran($event: ng.IAngularEvent, veteran: any) {
        $event.stopPropagation();

        this.showModalSaveVeteran(angular.copy(veteran));
    }

    changePage() {
        this.search = Object.assign({}, this.search, {
            page: this.currentPage,
            size: this.maxItemsToPage
        });

        this.getVeteransData(this.search);
    }

    exportVeterans() {
        let params = this.VeteranService.prepareSearchParams(this.search, true);

        this.VeteranFactory.exportVeterans(params).then((response: any) => {
            window.open(response.pathToFile);
        });
    }

    applyFilter() {
        this.getVeteransData(this.search);
    }

    resetFilter() {
        this.showAdvancedFilter = true;
        this.currentPage = 1;

        this.search = Object.assign({}, this.search, {
            page: 1,
            firstName: '',
            lastName: '',
            middleName: ''
        });

        this.getVeteransData(this.search);
    }
}

export {VeteranController}
