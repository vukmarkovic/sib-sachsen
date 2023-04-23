import { AbstractValidator } from './AbstractValidator'

export class LengthBetweenValidator extends AbstractValidator {
    validate(value) {
        return (
            value?.length >= this.options.value?.min &&
            value?.length <= this.options.value?.max
        )
    }
}
