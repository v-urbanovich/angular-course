import { ValidationErrors } from '@angular/forms';

export class ErrorParserService {

    public readonly defaultError: string = 'Please enter correct value';

    public parse(error: ValidationErrors | null): string | null {
        if (!error) {
            return null;
        }
        let errorText: string;

        if (error.required) {
            errorText = 'This field is required';
        } else if (error.minlength) {
            errorText = `Required length for this field is ${error.minlength.requiredLength}`;
        } else if (error.errorText) {
            errorText = error.errorText;
        } else {
            errorText = this.defaultError;
        }

        return errorText;
    }

}
