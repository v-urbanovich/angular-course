import { Component, Input } from '@angular/core';

@Component({
    selector: 'uu-app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

    @Input()
    public resort: IResortItem;

    @Input()
    public selectedResortId: number;

}
