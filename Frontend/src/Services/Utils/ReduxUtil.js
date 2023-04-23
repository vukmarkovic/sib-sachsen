/**
 * Trying to access the store directly causes problems
 * Redux official documentation recommends this method
 * @type {null}
 * @private
 */

let _store = null

export function setStore(store) {
    _store = store
}

export function getStore() {
    return _store
}

export function dispatchAction(action) {
    _store?.dispatch(action)
}
