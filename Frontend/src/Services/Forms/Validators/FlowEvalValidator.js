import { AbstractValidator } from './AbstractValidator'
import { getFlowSteps } from '../../Flows/Helpers/FlowDataGetters'

export class FlowEvalValidator extends AbstractValidator {
    validate(value) {
        // Will be used in eval
        const steps = getFlowSteps()
        const expression = this.options.value?.expression

        return eval(expression)
    }
}
