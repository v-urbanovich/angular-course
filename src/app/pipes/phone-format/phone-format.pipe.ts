import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

    public transform(phone: number, phoneLength: number = 7, codeLength: number = 0): string {
        const stringPhone: string = `${phone}`;
        const phoneNumber: string = stringPhone.slice(-phoneLength);
        const countryCode: string = stringPhone.slice(-stringPhone.length, -phoneLength - codeLength);

        let areaCode: string = stringPhone.slice(-phoneLength - codeLength, -phoneLength);
        if (areaCode) {
            areaCode = `(${areaCode}) `;
        }

        return `+${countryCode} ${areaCode}${phoneNumber}`;
    }

}
