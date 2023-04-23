import { store } from '../../Redux/store'

export function isLoggedIn() {
    return !!(
        store.getState().authToken?.currentToken &&
        store.getState().profile?.currentProfile
    )
}
