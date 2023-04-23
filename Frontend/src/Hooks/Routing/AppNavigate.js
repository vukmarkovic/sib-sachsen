import { useLocation, useNavigate } from 'react-router-dom'
import { logger } from '../../Services/Utils/LoggerUtil'

//@TODO(Future) We can add some more functionality, like navigateWithCallback etc.
export function useAppNavigate() {
    const navigate = useNavigate()

    const location = useLocation()

    function navigateWithAlert(path, alertMessage, alertSeverity) {
        logger.info(
            '[AppNavigate] Navigating to ',
            path,
            ' with alert ',
            alertMessage,
            alertSeverity
        )
        navigate(path, {
            state: { showAlert: true, alertMessage, alertSeverity },
        })
    }

    function onNavigate(path, param) {
        logger.info('[AppNavigate] Navigating to ', path, ' with param ', param)
        navigate(path, param)
    }

    // export to window
    window.navigate = onNavigate
    window.navigateWithAlert = navigateWithAlert

    return {
        navigateWithAlert,
        navigate: onNavigate,
    }
}
