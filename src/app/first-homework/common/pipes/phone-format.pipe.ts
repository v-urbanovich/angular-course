import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

    public transform(phone: number, formatOptions: PhoneFormatOptions = {}): string {
        const {phoneLength = 7, codeLength = 0} = formatOptions;
        const phoneAndCodeLength: number = phoneLength + codeLength;

        const stringPhone: string = `${phone}`;
        const phoneNumber: string = stringPhone.slice(-phoneLength);
        const countryCode: string = stringPhone.slice(-stringPhone.length, -phoneAndCodeLength);

        let areaCode: string = stringPhone.slice(-phoneLength - codeLength, -phoneLength);
        if (areaCode) {
            areaCode = `(${areaCode}) `;
        }

        return `+${countryCode} ${areaCode}${phoneNumber}`;
    }

}
