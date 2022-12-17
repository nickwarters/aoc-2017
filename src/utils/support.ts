export function splitLines(s: string){
    return s.split('\n')
}

export function splitDoubleLines(s: string){
    return s.split('\n\n')
}

export function parseCoords(s: string){
    return s.split(',').map(x => parseInt(x))
}
