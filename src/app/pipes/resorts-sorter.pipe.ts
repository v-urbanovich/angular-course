import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'resortsSorter'
})
export class ResortsSorterPipe implements PipeTransform {

    public transform(resorts: IResortItem[], type: string): IResortItem[] {
        return resorts.filter((resort: IResortItem) => !type || resort.type === type);
    }

}
