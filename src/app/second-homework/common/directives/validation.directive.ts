import { Directive, Input } from '@angular/core';
import { ValidatorsService } from '../services/validators.service';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
    selector: '[validationDirective]',
    providers: [{provide: NG_VALIDATORS, useExisting: ValidationDirective, multi: true}]
})
export class ValidationDirective implements Validator {
    @Input('validationDirective')
    public fieldName: string;

    public constructor(
        private _validators: ValidatorsService
    ) {
    }

    public validate(control: AbstractControl):  ValidationErrors | null {
        const validator: ValidatorFn = this._validators.getValidator(this.fieldName);
        return validator(control);
    }
}
