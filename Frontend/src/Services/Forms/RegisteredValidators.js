import { MinLengthValidator } from './Validators/MinLengthValidator'
import { RequiredValidator } from './Validators/RequiredValidator'
import { LengthBetweenValidator } from './Validators/LengthBetweenValidator'
import { FlowEvalValidator } from './Validators/FlowEvalValidator'

export const RegisteredValidators = {
    required: RequiredValidator,
    minLength: MinLengthValidator,
    lengthBetween: LengthBetweenValidator,
    eval: FlowEvalValidator,
}
