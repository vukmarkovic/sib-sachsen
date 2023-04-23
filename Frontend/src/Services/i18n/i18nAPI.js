import { getTranslations } from '../../Api/Services/LanguageAPIService'
import { logger } from '../Utils/LoggerUtil'

export function getTranslation(lang) {
    return new Promise((resolve) => {
        logger.info('[i18nAPI] getTranslation: ' + lang)

        getTranslations(lang).then((response) => {
            logger.info('[i18nSlice] getTranslation: ', response)
            if (response?.data) {
                resolve(response.data)
            }
        })
    })
}
