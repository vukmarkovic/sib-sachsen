import { useDispatch, useSelector } from 'react-redux'
import { setLangAsync } from '../../Redux/Slices/i18nSlice'

export default function useTranslations() {
    const dispatch = useDispatch()

    const t = useSelector((state) => state.i18n.translations)
    const lang = useSelector((state) => state.i18n.lang)
    const setLang = (lang) => dispatch(setLangAsync(lang))
    const supportedLangs = useSelector((state) => state.i18n.supportedLangs)
    const status = useSelector((state) => state.i18n.status)

    return {
        t,
        lang,
        setLang,
        init: setLang,
        supportedLangs,
        status,
    }
}
