import { getStore } from './ReduxUtil'
import { isArray } from './TypesUtil'

function parser(htmlString) {
    const parser = new DOMParser()

    return parser.parseFromString(htmlString, 'text/html')
}

// add another one without ns
export function trans(
    word,
    params,
    t = getStore().getState().i18n.translations
) {
    try {
        if (!word || !t) {
            return ''
        }
        const langKeySegments = word.split('.')
        let result = t

        for (const segment of langKeySegments) {
            result = result[segment]
        }

        result = replaceParams(result, params)

        if (isArray(result)) {
            return result
        }

        return result // parser(result).body.textContent;
    } catch (e) {
        return ''
    }
}

export function replaceParams(text, params) {
    for (const [name, value] of Object.entries(params)) {
        text = text.replaceAll(`:${name}`, value)
    }
    return text
}

export function currentLanguage() {
    return getStore().getState().i18n.language
}
