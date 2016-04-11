import {IMapService} from './../common/services/google-map/map.service';
import {IConfirmDialog} from './../common/services/confirm-dialog/confirm-dialog.service';
import {IVeteranService} from './veteran.service';
import {VeteranFactory} from './veteran.factory';

class VeteranController {
    veterans: any;
    markerOptions: any;
    infoBoxWindowOptions: any;
    gMap: any;
    showInfoBoxWindowVeteran: any;
    hideInfoBoxWindowVeteran: any;
    showAdvancedFilter: boolean = false;
    filterOptions: Object;

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

        this.getVeteransData();

        this.maxItemsToPage = CONSTANTS.PAGINATION.MAX_ITEMS_TO_PAGE;

        this.showInfoBoxWindowVeteran = MapService.showInfoBoxWindowVeteran;
        this.hideInfoBoxWindowVeteran = MapService.hideInfoBoxWindowVeteran;

        this.markerOptions = MapService.getMarkerOptions();
        this.infoBoxWindowOptions = MapService.getInfoBoxWindowOptionsToMarker();
        this.gMap = MapService.getSettingsGoogleMaps();

        this.filterOptions = VeteranService.getDefaultFilterOptions();
    }

    async getVeteransData() {
        var options = {
            page: 0,
            size: this.CONSTANTS.PAGINATION.MAX_ITEMS_TO_PAGE
        };

        try {
            let veteransData = await this.VeteranFactory.getVeterans(options);

            this.veterans = veteransData && angular.isArray(veteransData.data.items) ? veteransData.data.items : [];
            this.VeteranService.setMarkerOptionsToVeterans(this.veterans);

            this.totalCount = veteransData && veteransData.totalCount ? veteransData.totalCount : 0;
        } catch (error) {
            console.log(error);
        }
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

    pageChanged(): void {
        var params = {
            page: this.currentPage,
            size: this.maxItemsToPage
        };

        this.VeteranFactory.getVeterans(params).then((response: any) => {
            if (response.data.items.length) {
                this.VeteranService.setMarkerOptionsToVeterans(response.data.items);

                this.veterans.length = 0;

                angular.forEach(response.data.items, (value: any) => {
                    this.veterans.push(value);
                });
            }
        }).catch((error: any) => {
            this.$log.error(error);
        });
    }
}

export {VeteranController}
