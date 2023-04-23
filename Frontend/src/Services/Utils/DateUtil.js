export function getHours(date = new Date()) {
    return date.getHours()
}

export function getMinutes(date = new Date()) {
    return date.getMinutes()
}

export function getSeconds(date = new Date()) {
    return date.getSeconds()
}

export function getMilliseconds(date = new Date()) {
    return date.getMilliseconds()
}

export function getDay(date = new Date()) {
    return date.getDay()
}

export function getMonth(date = new Date()) {
    return date.getMonth()
}

export function getYear(date = new Date()) {
    return date.getFullYear()
}

export function formatTime(date = new Date()) {
    return `${getHours(date)}:${getMinutes(date)}:${getSeconds(date)}`
}

export function formatDate(date = new Date()) {
    return `${getDay(date)}/${getMonth(date)}/${getYear(date)}`
}

export function formatDateTime(date = new Date()) {
    return `${formatDate(date)} ${formatTime(date)}`
}

export function getDateFromUnixTimestamp(timestamp) {
    return new Date(timestamp * 1000)
}
