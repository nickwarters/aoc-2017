import { readFileSync } from 'fs'

const tests: [string, any][] = [
    [`1122`, 3],
    [`1111`, 4],
    [`1234`, 0],
    [`91212129`, 9],
]

tests.forEach(([testData, expected]) => {
    const result = solve(testData)
    console.log(`Example Input Solution - Expected: ${expected}, Got: ${result}, ${result === expected ? 'PASS' : 'FAIL'}`)
})

console.log('Full Input Solution', solve(readFileSync('./input.txt', { encoding: 'utf-8' })))

function solve(input: string): any {
    return input.trim().split('\n').reduce((prev, line) => {

        let sum = 0;
        const adddedInds = new Set()
        
        if(line.charAt(0) === line.charAt(line.length - 1)) sum += parseInt(line.charAt(0));

        for(let i = 1; i < line.length + 1; i++){
            if(line.charAt(i) === line.charAt(i - 1) && !adddedInds.has(i - 1)) {
                sum += parseInt(line.charAt(i - 1))
                adddedInds.add(i - 1)
            }
            console.table({c: line.charAt(i), cMinus1: line.charAt(i - 1), sum})
        }

        return sum 

    }, 0)
}
