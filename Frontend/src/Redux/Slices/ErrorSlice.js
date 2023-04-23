import { createSlice } from '@reduxjs/toolkit'
import { logger } from '../../Services/Utils/LoggerUtil'

const errorSlice = createSlice({
    name: 'errors',
    initialState: {},
    reducers: {
        submitError(state, action) {
            const errorName = action?.payload?.name

            if (!errorName) {
                logger.error('[ErrorSlice] Error name is missing')
                return
            }

            logger.info(`[ErrorSlice] Submitting error ${errorName}...`)

            state[errorName] = action.payload.error
        },
        resetError(state, action) {
            const errorName = action?.payload?.name

            if (!errorName) {
                logger.error('[ErrorSlice] Error name is missing')
                return
            }

            logger.info(`[ErrorSlice] Resetting error ${errorName}.`)

            state[errorName] = null
        },
    },
})

export const { submitError, resetError } = errorSlice.actions
export default errorSlice.reducer
