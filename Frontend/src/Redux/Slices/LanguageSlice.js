import { createSlice } from '@reduxjs/toolkit'
import { DEFAULT_LANGUAGE } from '../../Config/Constants'
import { logger } from '../../Services/Utils/LoggerUtil'

const languageSlice = createSlice({
    name: 'language',
    initialState: { currentLanguage: DEFAULT_LANGUAGE },
    reducers: {
        setLanguage(state, action) {
            const languageName = action.payload
                ? action.payload
                : DEFAULT_LANGUAGE

            logger.info(
                '[languageSlice] Changing language to ',
                languageName + '.'
            )

            state.currentLanguage = languageName
        },
        resetLanguage(state, action) {
            logger.info(
                '[languageSlice] Resetting language to default language ',
                DEFAULT_LANGUAGE + '.'
            )

            state.currentLanguage = DEFAULT_LANGUAGE
        },
    },
})

export const { setLanguage, resetLanguage } = languageSlice.actions

export default languageSlice.reducer
