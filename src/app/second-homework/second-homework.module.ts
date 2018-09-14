import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondHomeworkComponent } from './second-homework.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorParserService } from './common/services/error-parser.service';
import { ValidatorsService } from './common/services/validators.service';
import { ValidationDirective } from './common/directives/validation.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        SecondHomeworkComponent,
        SignupComponent,
        LoginComponent,
        ValidationDirective
    ],
    providers: [
        ErrorParserService,
        ValidatorsService
    ]
})
export class SecondHomeworkModule {
}
