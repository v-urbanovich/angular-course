import { Routes } from '@angular/router';
import { SecondHomeworkComponent } from './second-homework.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {
        path: 'second-homework',
        component: SecondHomeworkComponent,
        children: [
            {path: '', redirectTo: 'signup', pathMatch: 'full'},
            {path: 'signup', component: SignupComponent},
            {path: 'login', component: LoginComponent},
        ]
    }
];
