import { Component } from '@angular/core';


@Component({
    selector: 'uu-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public pages: RouteLink[] = [
        {title: 'First Homework', route: 'first-homework'},
        {title: 'Second Homework', route: 'second-homework'},
        {title: 'Third Homework', route: 'third-homework'}
    ];

}
