const findMatching = (array, string) => {
    return array.filter(e => {return e.toLowerCase() === string.toLowerCase()})
}

const fuzzyMatch = (array, string) => {
    return array.filter(e => {return e.startsWith(string)})
}

const matchName = (array, string) => {
    return array.filter(e => {return e.name === string})
}