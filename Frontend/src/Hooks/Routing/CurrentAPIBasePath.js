import React from 'react'
import { getCurrentAPIBasePath } from '../../Services/BasePathService'

// To be used in components if ever needed to keep the hook style
export function useCurrentAPIBasePath() {
    return getCurrentAPIBasePath()
}
