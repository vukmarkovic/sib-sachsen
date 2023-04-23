import { LOGIN, LOGOUT, VERIFY_TOKEN } from '../Paths'
import client from '../HttpClient'

function login(password) {
    const email = 'admin@softfact.works'

    return client.httpClient.post(LOGIN, {
        username: email,
        password: password,
    })
}

function verifyToken() {
    // TODO @Stefan @Emre Clean up, we don't need a logout API call
    return client.httpClient.get(VERIFY_TOKEN)
}

export { login, verifyToken }
