export function kebabize(str) {
    return str.replace(
        /[A-Z]+(?![a-z])|[A-Z]/g,
        ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
    )
}

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function camelCase(str) {
    return str.replace(/([-_][a-z])/gi, ($1) => {
        return $1.toUpperCase().replace('-', '').replace('_', '')
    })
}

export function pascalCase(str) {
    return capitalize(camelCase(str))
}

export function getCountForEveryWords(str) {
    const ignoreList = [
        'the',
        'an',
        'a',
    ]
    
    const initialValue = {}
    
    const result = str.split(' ').reduce((prev, currentValue) => {
        if(!ignoreList.includes(currentValue)){
            if(prev[currentValue] == undefined) prev[currentValue] = 1
            else prev[currentValue]++
            return prev
        }
        else return prev
    }, initialValue)

    return result
}
