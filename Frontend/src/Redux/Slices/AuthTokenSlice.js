import { createSlice } from '@reduxjs/toolkit'
import { login, verifyToken } from '../../Api/Services/LoginAPIService'
import { submitError } from './ErrorSlice'
import { resetStorage } from '../../Services/Utils/StorageUtil'
import { logger } from '../../Services/Utils/LoggerUtil'

const authTokenSlice = createSlice({
    name: 'token',
    initialState: {
        currentToken: '',
    },
    reducers: {
        setCurrentAuthToken(state, action) {
            logger.info('[AuthTokenSlice] Saving token.')

            state.currentToken = action.payload?.token
        },
    },
})

export const { setCurrentAuthToken } = authTokenSlice.actions

export default authTokenSlice.reducer

export function fetchToken(password) {
    return async dispatch => {
        if (!password) {
            dispatch(
                submitError({
                    name: 'login',
                    error: 'Email or password is empty',
                })
            )
        }
        logger.info('[AuthTokenSlice] Fetching token.')
        try {
            const response = await login(password)
            if (
                response?.status === 201 &&
                response?.data &&
                response?.data?.token
            ) {
                logger.info('[AuthTokenSlice] Token fetched.')
                localStorage.setItem('token', response?.data?.token)
                dispatch(
                    setCurrentAuthToken({
                        token: response?.data?.token,
                    })
                )
                return response?.status
            } else {
                logger.info('[AuthTokenSlice] Wrong credentials.')
            }
        } catch (error) {
            logger.error('[AuthTokenSlice] Error fetching token.', error)

            dispatch(submitError({ name: 'login', error }))
        }
    }
}

export function checkVerify(usertoken) {
    return async dispatch => {
        logger.info('[AuthTokenSlice] Verifying token.')
        return new Promise(resolve => {
            verifyToken()
                .then(response => {
                    if (response?.status === 200 && response?.data) {
                        logger.info('[AuthTokenSlice] Token verified.')
                        dispatch(
                            setCurrentAuthToken({
                                token: usertoken,
                            })
                        )
                        resolve({ success: 'success' })
                    } else {
                        logger.info('[AuthTokenSlice] Token non-verified.')
                        resetStorage()
                        dispatch(setCurrentAuthToken(null))
                    }
                    return response?.status
                })
                .catch(e => {
                    resolve()
                })
        })
    }
}

export function resetToken() {
    return async dispatch => {
        logger.info('[AuthTokenSlice] Resetting token.')
    }
}
