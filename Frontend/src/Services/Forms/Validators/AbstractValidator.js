export class AbstractValidator {
    constructor(options) {
        this.options = {
            value: options,
        }
    }

    validate(value) {
        throw new TypeError('Must override validate method')
    }
}
