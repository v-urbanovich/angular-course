import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResortDataService } from '../services/resort-data.service';
import { Observable } from 'rxjs';
import { sortTypes } from '../data/sortTypes';

@Component({
    selector: 'uu-app-list-block',
    templateUrl: './list-block.component.html',
    styleUrls: ['./list-block.component.scss']
})
export class ListBlockComponent implements OnInit {
    public resorts$: Observable<IResortItem[]>;
    public selectedResort: IResortItem | null = null;
    public sortTypes: SortType[] = sortTypes;
    public sortBy: string = '';

    @Output()
    public selectResort: EventEmitter<IResortItem> = new EventEmitter();

    public constructor(private _resortDataService: ResortDataService) {
    }

    public ngOnInit(): void {
        this.resorts$ = this._resortDataService.getResorts();
    }

    public onSelectResort(resort: IResortItem): void {
        this.selectedResort = resort;
        this.selectResort.emit(resort);
    }

    public getImageUrl(resort: IResortItem | null): string {
        return resort && resort.img || 'assets/your-tour.png';
    }

    public selectType(type: SortType): void {
        this.sortBy = type.sortBy;
    }

}
