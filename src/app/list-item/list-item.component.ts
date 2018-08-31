import { Component, Input } from '@angular/core';
import { formats } from '../services/phoneFormats';

@Component({
    selector: 'uu-app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
    public phoneFormats: PFMap = formats;

    @Input()
    public resort: IResortItem;

    @Input()
    public selectedResortId: number;

    public getFormat(country: string): PhoneFormatOptions {
        return this.phoneFormats[country] || {};
    }

}
