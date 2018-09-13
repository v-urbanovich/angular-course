import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ErrorParserService } from '../services/error-parser.service';

@Component({
    selector: 'uu-app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

    public signUpForm: FormGroup;
    public formInvalid: boolean = false;

    public constructor(
        private _fb: FormBuilder,
        private _errorParser: ErrorParserService
    ) {
    }

    public ngOnInit(): void {
        this.signUpForm = this._fb.group({
            firstName: [
                '',
                [Validators.required, Validators.minLength(4)]],
            lastName: [
                '',
                [Validators.required, Validators.minLength(4)]],
            email: [''],
            password: ['']

        });
    }

    public sendForm(form: FormGroup): void {
        this.formInvalid = form.invalid;
        if (this.formInvalid) {
            return;
        }
    }

    public getErrorText(fieldName: string): string {
        const field: AbstractControl = this.signUpForm.get(fieldName);
        const errorObj: ValidationErrors | null = field.errors;

        return this._errorParser.parse(errorObj);
    }
}
