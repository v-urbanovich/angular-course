import { Route } from '@angular/router';


export const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'first-homework'
    },
    {
        path: '**',
        redirectTo: 'first-homework'
    }
];
