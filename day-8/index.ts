import { readFileSync } from "fs"

const run = () => {
    let file = readFileSync("./data.txt", {
        encoding: "utf-8"
    })

    const split = file.split('\n\n')
    const instructions = split[0].split('')
    let nodes = {}

    split[1].split('\n').forEach(v => {
        const key = v.split('=')[0].trim()
        const values = v.split('=')[1].trim()
        nodes[key] = values.split(',').map(a => a.split('').filter(v => !['(', ')'].includes(v)).join(''))
    })
    let end = "ZZZ"
    let current = "AAA"
    let i  = 0
    console.log(instructions)
    console.log(nodes)
    while(current.trim() != end) {
        console.log(current.trim(), instructions[i % instructions.length])
        const index = instructions[i % instructions.length] == "L" ? 0 : 1
        current = nodes[current.trim()][index]
        i++;
    }
    console.log(i)

}

run()