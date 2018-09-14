import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ValidatorFn } from '../../../../../node_modules/@angular/forms/src/directives/validators';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

// tslint:disable-next-line
const emailRegExp: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export class ValidatorsService {

    public emailValidator(control: AbstractControl): ValidationErrors | null {
        const value: string = control.value;
        const emailError: ValidationErrors = {errorText: 'Please enter valid email'};

        return emailRegExp.test(value) ? null : emailError;
    }

    public passwordValidator(control: AbstractControl): ValidationErrors | null {
        const value: string = control.value;
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

    public emailExisted(control: AbstractControl): Observable<ValidationErrors| null>  {
        const existedEmails: string[] = ['test@te.te', '123@test.test'];
        const value: string = control.value;

        return of(value)
            .pipe(
                delay(3000),
                map((email: string) => {
                    console.log('do check')
                    return !~existedEmails.indexOf(email) ? null : {errorText: 'Email already exists'};
                })
            );
    }

    public getValidator(name: string): ValidatorFn | never {
        switch (name) {
            case 'email':
                return this.emailValidator;
            case 'password':
                return this.passwordValidator;
            default:
                throw new Error(`Unknown validator name: ${name}`);
        }
    }

}
