import { readFileSync } from "fs"

const run = () => {
    let file = readFileSync("./part2-data.txt", {
        encoding: "utf-8"
    })

    const split = file.split('\n\n')
    const instructions = split[0].split('')
    let nodes: Record<string, string> = {}

    split[1].split('\n').forEach(v => {
        const key = v.split('=')[0].trim()
        const values = v.split('=')[1].trim()
        nodes[key] = values.split(',').map(a => a.split('').filter(v => !['(', ')'].includes(v)).join('')) as any
    })
    let endsWithA = Object.keys(nodes).filter(node => node.endsWith('A'))

    let j  = 0

    while(!endsWithA.every(node => node.endsWith('Z'))) {
        endsWithA.forEach((v, i) => {
            const index = instructions[j % instructions.length] == "L" ? 0 : 1
            endsWithA[i] = nodes[endsWithA[i].trim()][index].trim()
            // if (v == "XXX") console.log("XXX")
            // console.log(nodes[endsWithA[i].trim()][index].trim())
        })
        j++;
    }

    console.log(j)

}

run()