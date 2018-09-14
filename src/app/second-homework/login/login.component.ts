import { Component } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { ErrorParserService } from '../common/services/error-parser.service';

@Component({
    selector: 'uu-app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public loginData: ILoginData = {
        email: '',
        password: ''
    };

    public constructor(
        private _errorParser: ErrorParserService
    ) { }

    public getErrorText(errors: ValidationErrors | null): string | null {
        return this._errorParser.parse(errors);
    }

    public sendForm(form: FormGroup): void {
        const value: ISignupFormValue = form.value;
        alert(`Sending form: ${JSON.stringify(value)}`);
        form.reset();
    }
}
