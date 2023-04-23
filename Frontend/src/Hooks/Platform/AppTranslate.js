import React from 'react'
import useTranslations from '../../Services/i18n/useTranslations'
import { trans } from '../../Services/Utils/I18nUtil'
import { logger } from '../../Services/Utils/LoggerUtil'

export function useAppTranslate() {
    const { t, lang, setLang } = useTranslations()

    function onChangeLang(lang) {
        logger.info('[useAppTranslate] Changing language to: ' + lang)
        setLang(lang)
    }

    function doTrans(word, params = {}) {
        return trans(word, params, t)
    }

    return [doTrans, onChangeLang, lang]
}
