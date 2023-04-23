export function callbackFn(name, ...args) {
    if (name && window[name]) {
        return window[name](...args)
    }
}
