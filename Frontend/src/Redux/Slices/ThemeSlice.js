import { createSlice } from '@reduxjs/toolkit'
import { DEFAULT_THEME } from '../../Config/Constants'
import { logger } from '../../Services/Utils/LoggerUtil'

const themeSlice = createSlice({
    name: 'theme',
    initialState: { currentTheme: DEFAULT_THEME },
    reducers: {
        setTheme(state, action) {
            const themeName = action.payload ? action.payload : DEFAULT_THEME

            logger.info('[ThemeSlice] Changing theme to ', themeName + '.')

            state.currentTheme = themeName
        },
        resetTheme(state, action) {
            logger.info(
                '[ThemeSlice] Resetting theme to default theme ',
                DEFAULT_THEME + '.'
            )

            state.currentTheme = DEFAULT_THEME
        },
    },
})

export const { setTheme, resetTheme } = themeSlice.actions
export default themeSlice.reducer
