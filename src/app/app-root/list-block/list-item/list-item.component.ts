import { Component, EventEmitter, Input, Output } from '@angular/core';
import { formats } from '../../../common/data/phoneFormats';

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

    @Input()
    public isFirst: boolean;

    @Input()
    public set selectedType(type: string) {
        if (!this.isFirst) { return; }

        setTimeout(() => {
            this.click.emit(this.resort);
        });
    }

    @Output()
    public click: EventEmitter<IResortItem> = new EventEmitter();

    public getFormat(country: string): PhoneFormatOptions {
        return this.phoneFormats[country] || {};
    }

}
