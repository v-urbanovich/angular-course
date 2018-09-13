import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondHomeworkComponent } from './second-homework.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        SecondHomeworkComponent,
        SignupComponent,
        LoginComponent
    ]
})
export class SecondHomeworkModule {
}
