interface IVeteranService {
    setMarkerOptionsToVeteran(veteran: any): void;
    setMarkerOptionsToVeterans(veterans: Array<{}>): void;
    getArrayIndexByVeteranId(veterans: Array<any>, id: number): number;
}

class VeteranService implements IVeteranService {
    /** @ngInject */
    constructor() {}

    setMarkerOptionsToVeteran(veteran: any): void {
        veteran.marker = {
            visible: false,
            position: {
                latitude: veteran.latitude,
                longitude: veteran.longitude
            },
            events: {
                click: (marker: any) => {}
            }
        };
    }

    setMarkerOptionsToVeterans(veterans: Array<{}>): void {
        angular.forEach(veterans, (veteran: any) => {
            this.setMarkerOptionsToVeteran(veteran);
        });
    }

    getArrayIndexByVeteranId(veterans: Array<any>, id: number): number {
        var foundIndex;

        angular.forEach(veterans, (veteran: any, key: number) => {
            if (veteran.id === id) {
                foundIndex = key;
                return true;
            }
        });

        return foundIndex;
    }
}

export {
    IVeteranService,
    VeteranService
}
