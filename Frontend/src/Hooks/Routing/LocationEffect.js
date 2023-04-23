import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { logger } from '../../Services/Utils/LoggerUtil'

/**
 * @description This hook is used to listen to path changes and calls the callback function on location change
 * @param callback
 */
export function useLocationEffect(callback = null) {
    const location = useLocation()

    useEffect(() => {
        logger.info('[useLocationEffect] location changed to', location)
        if (callback) {
            callback(location)
        }
    }, [location])

    return location
}
