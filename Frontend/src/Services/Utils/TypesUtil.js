export function isString(variable) {
    return typeof variable === 'string' || variable instanceof String
}

export function isArray(variable) {
    return variable instanceof Array
}

export function isObject(variable) {
    return variable instanceof Object
}
