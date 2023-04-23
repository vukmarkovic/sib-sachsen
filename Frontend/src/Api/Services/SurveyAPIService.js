import { SURVEY } from '../Paths'
import client from '../HttpClient'

function getSurvey() {
    return client.httpClient.get(SURVEY)
}

function submitSurvey(body) {
    return client.httpClient.post(SURVEY, { data: body, time: new Date() })
}

export {
    getSurvey,
    submitSurvey,
}
