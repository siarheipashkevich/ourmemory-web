interface IVeteranService {
    setMarkerOptionsToVeteran(veteran: any);
    setMarkerOptionsToVeterans(veterans: Array<{}>);
    getArrayIndexByVeteranId(veterans: Array<any>, id: number): number;
    getDefaultFilterOptions(): Object;
}

class VeteranService implements IVeteranService {
    setMarkerOptionsToVeteran(veteran: any) {
        veteran.marker = {
            visible: false,
            position: {
                latitude: veteran.latitude,
                longitude: veteran.longitude
            },
            events: {
                click: (marker: any) => {
                    console.log(marker);
                }
            }
        };
    }

    setMarkerOptionsToVeterans(veterans: Array<{}>) {
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

    getDefaultFilterOptions(): Object {
        return {
            slider: {
                min: 1920,
                max: 1944,
                options: {
                    floor: 1900,
                    ceil: 2016,
                    translate: (value: string): string => value + 'г'
                }
            },
            dropdownn: [
                {name: 'For Rent'},
                {name: 'For Sale'},
                {name: 'Продажа'},
                {name: 'Аренда'}
            ]
        };
    }
}

export {IVeteranService, VeteranService}
