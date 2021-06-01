const { readFileSync, writeFileSync } = require('fs')

console.log('start 10-fs-sync');
const first = readFileSync('./folder/first.txt', 'utf-8')
const second = readFileSync('./folder/second.txt', 'utf-8')

console.log(first, second)
//need 'utf-8' arg otherwise you get a buffer stream(?)
const test = readFileSync('./folder/subfolder/test.txt', 'utf-8')
console.log(test)

//this overwrites
writeFileSync(
    './folder/subfolder/test.txt',
    `Here is the result : ${first}, ${second}`
)

console.log('done write no flag');
//this will append
writeFileSync(
    './folder/subfolder/test.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' }
)

console.log('done write with flag');
console.log('starting next task');