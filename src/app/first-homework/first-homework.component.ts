import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uu-app-first-homework',
  templateUrl: './first-homework.component.html',
  styleUrls: ['./first-homework.component.scss']
})
export class FirstHomeworkComponent {

    public selectedResort: IResortItem | null = null;

    public selectResort(resort: IResortItem): void {
        this.selectedResort = resort;
    }

}
