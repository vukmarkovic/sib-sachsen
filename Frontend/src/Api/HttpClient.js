import { getCurrentAPIBasePath } from '../Services/BasePathService'
import axios from 'axios'

const httpClient = axios.create({
    baseURL: getCurrentAPIBasePath() + '/api/v2/',
    // TODO @Sherif Is this duplicated? See src/Api/Interceptors/AuthTokenInterceptor.js
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
})

export default { httpClient }

// export httpClient to window
window.httpClient = httpClient
