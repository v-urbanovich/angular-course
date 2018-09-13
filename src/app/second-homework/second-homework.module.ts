import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondHomeworkComponent } from './second-homework.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorParserService } from './services/error-parser.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        SecondHomeworkComponent,
        SignupComponent,
        LoginComponent
    ],
    providers: [ErrorParserService]
})
export class SecondHomeworkModule {
}
