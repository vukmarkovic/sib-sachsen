import { GET_TRANSLATIONS } from '../Paths'
import client from '../HttpClient'
import { logger } from '../../Services/Utils/LoggerUtil'

function getTranslations(lang) {
    logger.info('[LanguageAPIService] getTranslations: ' + lang)
    return client.httpClient.get(GET_TRANSLATIONS, { params: { lang: lang } })
}

export { getTranslations }
