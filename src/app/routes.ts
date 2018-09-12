import { Route } from '@angular/router';
import { FirstHomeworkComponent } from './first-homework/first-homework.component';
import { SecondHomeworkComponent } from './second-homework/second-homework.component';


export const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'first-homework'
    },
    {
        path: 'first-homework',
        component: FirstHomeworkComponent
    },
    {
        path: 'second-homework',
        component: SecondHomeworkComponent
    },
    {
        path: '**',
        redirectTo: 'first-homework'
    }
];
