import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ErrorParserService } from '../common/services/error-parser.service';
import { ValidatorsService } from '../common/services/validators.service';

@Component({
    selector: 'uu-app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

    public signUpForm: FormGroup;

    public constructor(
        private _fb: FormBuilder,
        private _errorParser: ErrorParserService,
        private _validators: ValidatorsService
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
            email: ['',
              [Validators.required, this._validators.emailValidator], [this._validators.emailExisted]],
            password: ['',
              [Validators.required, Validators.minLength(6), this._validators.passwordValidator]]

        });
    }

    public sendForm(form: FormGroup): void {
        if (form.invalid) {
            this.markAllAsTouched(form);
            return;
        }

        const value: ISignupFormValue = form.value;
        alert(`Sending form: ${JSON.stringify(value)}`);
        form.reset();
    }

    public getErrorText(fieldName: string): string {
        const field: AbstractControl = this.signUpForm.get(fieldName);
        const errorObj: ValidationErrors | null = field.errors;

        return this._errorParser.parse(errorObj);
    }

    public loadingInProcess(): boolean {
        const control: AbstractControl = this.signUpForm.get('email');
        return control.status === 'PENDING';
    }

    private markAllAsTouched(group: FormGroup): void {
        for (const controlName in group.controls) {
            const control: AbstractControl = group.controls[controlName];
            control.markAsTouched();
        }
    }
}
