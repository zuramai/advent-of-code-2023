import { readFileSync } from "fs";

const read = () => {
    let file = readFileSync("./data.txt", {
        encoding: "utf-8"
    })
    const lines = file.split("\n")
    let instances = {}

    lines.forEach((line, i) => instances[i+1] = 1)
    
    lines.forEach((line, i) => {
        
        const split = line.split('|')
        const winning_numbers = split[0].split(':')[1].trim().split(' ')
        const my_numbers = split[1].trim().split(' ').filter(Boolean)
        let winnings = 0
        winning_numbers.forEach(num => {
            if (my_numbers.find(v => v == num)) winnings++
        })
        console.log(instances);

        for(let j = i+2; j < i+2 + winnings; j++) {
            instances[j] += instances[i+1]
            console.log("i = ",i+1,' j = ' , j)
        }

        // console.log(i+1, winnings, instances[i+1]);
    })
    let v = Object.values(instances)
    return v.reduce((acc,curr) => acc + curr, 0);

}

console.log(read())