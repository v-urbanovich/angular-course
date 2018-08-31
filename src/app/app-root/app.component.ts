import { Component } from '@angular/core';


@Component({
    selector: 'uu-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public selectedResort: IResortItem | null = null;

    public selectResort(resort: IResortItem): void {
        this.selectedResort = resort;
    }

}
