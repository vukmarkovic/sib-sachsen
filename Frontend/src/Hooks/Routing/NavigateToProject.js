import React from 'react'
import { useAppNavigate } from './AppNavigate'
import { logger } from '../../Services/Utils/LoggerUtil'

const typeToPath = {
    team_development: (teamId) => `/teams/${teamId}/development`,
}

export function useNavigateToProject() {
    const { navigate } = useAppNavigate()

    function navigateToProject(project, params = {}) {
        switch (project?.type) {
            case 'team_development':
                navigate(typeToPath[project?.type](project?.team_id), params)
                break
            default:
                logger.error(
                    `[useNavigateToProject] Unknown project type: ${project?.type}`
                )
        }
    }

    return navigateToProject
}
