import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import themeReducer from './Slices/ThemeSlice'
import authTokenReducer from './Slices/AuthTokenSlice'
import errorReducer from './Slices/ErrorSlice'
import publicSurveyReducer from './Slices/PublicSurveySlice'

const combinedReducers = combineReducers({
    authToken: authTokenReducer,
    theme: themeReducer,
    errors: errorReducer,
    publicSurvey: publicSurveyReducer,
})

export const store = configureStore({
    reducer: combinedReducers,
    devTools: process.env.NODE_ENV !== 'production',
    // Thunk middleware makes sure no unserializable values are passed to the reducers
    middleware: [thunk],
})

// Export the store to be used in legacy code
// window.store = store
