import { AbstractValidator } from './AbstractValidator'

export class RequiredValidator extends AbstractValidator {
    validate(value) {
        return (
            !this.options.value ||
            (value !== null && value !== undefined && value !== '')
        )
    }
}
