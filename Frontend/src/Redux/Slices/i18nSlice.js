import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { defaultLang, supportedLangs } from '../../Config/i18nConfig'
import { getTranslation } from '../../Services/i18n/i18nAPI'
import { logger } from '../../Services/Utils/LoggerUtil'

const initialState = {
    status: 'loading',
    lang: defaultLang,
    supportedLangs: { ...supportedLangs },
    translations: {},
    //translations: translations_example,
}

export const setLangAsync = createAsyncThunk(
    'i18n/setLangAsync',
    async (lang, { getState, dispatch }) => {
        const resolvedLang = lang || getState().i18n.lang

        logger.info('[i18nSlice] setLangAsync: ' + resolvedLang)
        //Api call to get translations

        const translations = await getTranslation(resolvedLang)

        //const  translations = translations_example;

        dispatch(i18nSlice.actions.setLang(resolvedLang))

        return translations
    }
)

export const i18nSlice = createSlice({
    name: 'i18n',
    initialState,
    reducers: {
        setLang: (state, action) => {
            state.lang = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setLangAsync.pending, (state) => {
            if (Object.keys(state.i18n?.translations || {}).length === 0) {
                state.status = 'loading'
            }
        })

        builder.addCase(setLangAsync.fulfilled, (state, action) => {
            state.translations = action.payload
            state.status = 'idle'
        })
    },
})

export const selectTranslations = (state) => state.i18n.translations
export default i18nSlice.reducer
