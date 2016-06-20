import {VeteranFactory} from './veteran.factory';
import {VeteranModel, VeteranListModel} from './models/veteran';

interface IVeteranService {
    setMarkerOptionsToVeteran(veteran: any);
    setMarkerOptionsToVeterans(veterans: Array<{}>);
    getArrayIndexByVeteranId(veterans: Array<VeteranModel>, id: number): number;
    getDefaultSearchOptions(): any;
    getTroopsList(): Array<Object>;
    prepareSearchParams(params: any, filterEnabled?: boolean): any;
    getVeterans(params: any, filterEnabled?: boolean): ng.IPromise<VeteranListModel>;
}

class VeteranService implements IVeteranService {
    /** @ngInject */
    constructor(
        private VeteranFactory: VeteranFactory,
        private CONSTANTS: any
    ) {}

    getVeterans(params: any, filterEnabled: boolean = false): ng.IPromise<VeteranListModel> {
        params = this.prepareSearchParams(params, filterEnabled);

        return this.VeteranFactory.getVeterans(params);
    }

    setMarkerOptionsToVeteran(veteran: any) {
        veteran.marker = {
            position: {
                latitude: veteran.latitude,
                longitude: veteran.longitude
            }
        };
    }

    setMarkerOptionsToVeterans(veterans: Array<{}>) {
        angular.forEach(veterans, (veteran: any) => {
            this.setMarkerOptionsToVeteran(veteran);
        });
    }

    getArrayIndexByVeteranId(veterans: Array<VeteranModel>, id: number): number {
        let foundIndex = -1;

        for (let i = 0; i < veterans.length; i++) {
            if (veterans[i].id === id) {
                foundIndex = i;
                break;
            }
        }

        return foundIndex;
    }

    getDefaultSearchOptions(): Object {
        return {
            troops: {},
            yearBirth: {
                start: 1920,
                end: 1944,
                options: {
                    floor: 1900,
                    ceil: 2016,
                    disabled: true,
                    translate: (value: string): string => value + 'г'
                }
            },
            yearDeath: {
                start: 1939,
                end: 1960,
                options: {
                    floor: 1900,
                    ceil: 2016,
                    disabled: true,
                    translate: (value: string): string => value + 'г'
                }
            },
            yearCall: {
                start: 1920,
                end: 1944,
                options: {
                    floor: 1900,
                    ceil: 2016,
                    disabled: true,
                    translate: (value: string): string => value + 'г'
                }
            }
        };
    }

    getTroopsList(): Array<Object> {
        return [
            {title: 'Танкисты'},
            {title: 'Самоходчики'},
            {title: 'Летчики-истребители'},
            {title: 'Летчики-штурмовики'},
            {title: 'Летчики-бомбардировщики'},
            {title: 'Летно-технический состав'},
            {title: 'Разведчики'},
            {title: 'Артиллеристы'},
            {title: 'ГМЧ («Катюши»)'},
            {title: 'Зенитчики'},
            {title: 'Медики'},
            {title: 'Минометчики'},
            {title: 'Пехотинцы'},
            {title: 'Пулеметчики'},
            {title: 'Снайперы'},
            {title: 'Связисты'},
            {title: 'Краснофлотцы'},
            {title: 'Десантники'},
            {title: 'Саперы'},
            {title: 'НКВД и СМЕРШ'},
            {title: 'Кавалеристы'},
            {title: 'Водители'},
            {title: 'Партизаны'},
            {title: 'Гражданские'},
            {title: 'Другие войска'}
        ];
    }

    prepareSearchParams(params: any, filterEnabled: boolean = false): any {
        let searchOptions: any = {};

        if (!params.page) {
            params.page = 1;
        }

        if (!params.size) {
            params.size = this.CONSTANTS.PAGINATION.MAX_ITEMS_TO_PAGE;
        }

        searchOptions.page = params.page;
        searchOptions.size = params.size;

        if (filterEnabled) {
            if (params.firstName && params.firstName !== '') {
                searchOptions.firstName = params.firstName;
            }

            if (params.lastName && params.lastName !== '') {
                searchOptions.lastName = params.lastName;
            }

            if (params.middleName && params.middleName !== '') {
                searchOptions.middleName = params.middleName;
            }

            if (params.birthPlace && params.birthPlace !== '') {
                searchOptions.birthPlace = params.birthPlace;
            }

            if (params.troops && params.troops.title && params.troops.title !== '') {
                searchOptions.troops = params.troops.title;
            }

            if (params.yearBirth && !params.yearBirth.options.disabled) {
                searchOptions.yearBirthStart = params.yearBirth.start;
                searchOptions.yearBirthEnd = params.yearBirth.end;
            }

            if (params.yearDeath && !params.yearDeath.options.disabled) {
                searchOptions.yearDeathStart = params.yearDeath.start;
                searchOptions.yearDeathEnd = params.yearDeath.end;
            }

            if (params.yearCall && !params.yearCall.options.disabled) {
                searchOptions.yearCallStart = params.yearCall.start;
                searchOptions.yearCallEnd = params.yearCall.end;
            }
        }

        return searchOptions;
    }
}

export {IVeteranService, VeteranService}
