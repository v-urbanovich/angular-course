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

    private readonly emailRegExp: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
            email: ['',
              [Validators.required, (c: AbstractControl) => this.emailValidator(c)]],
            password: ['',
              [Validators.required, Validators.minLength(6), (c: AbstractControl) => this.passwordValidator(c)]]

        });
    }

    public sendForm(form: FormGroup): void {
        this.formInvalid = form.invalid;
        if (this.formInvalid) {
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

    private markAllAsTouched(group: FormGroup): void {
        for (const controlName in group.controls) {
            const control: AbstractControl = group.controls[controlName]
            control.markAsTouched();
        }
    }

    private emailValidator(control: AbstractControl): ValidationErrors | null {
        const value: any = control.value;
        const emailError: ValidationErrors = {errorText: 'Please enter valid email'};

        return this.emailRegExp.test(value) ? null : emailError;
    }

    private passwordValidator(control: AbstractControl): ValidationErrors | null {
      const value: any = control.value;
      let errorText: string;

      if (/\s+/.test(value)) {
        errorText = 'You can not use spaces';
      } else if (!/[a-z]/.test(value)) {
        errorText = 'Password must contain at least 1 lowercase character';
      } else if (!/[A-Z]/.test(value)) {
        errorText = 'Password must contain at least 1 uppercase character';
      }

      return errorText ? {errorText} : null;
    }
}
