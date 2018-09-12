import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'resortsFilter'
})
export class ResortsFilterPipe implements PipeTransform {

    public transform(resorts: IResortItem[], type: string): IResortItem[] {
        return resorts.filter((resort: IResortItem) => !type || resort.type === type);
    }

}
