import { AbstractValidator } from './AbstractValidator'

export class MinLengthValidator extends AbstractValidator {
    validate(value) {
        return value?.length >= this.options.value
    }
}
