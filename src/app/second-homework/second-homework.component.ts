import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'uu-app-second-homework',
    templateUrl: './second-homework.component.html',
    styleUrls: ['./second-homework.component.scss']
})
export class SecondHomeworkComponent implements OnInit {

    public ngOnInit(): void {
        document.body.style.backgroundColor = '#c1bdba';
    }

}
