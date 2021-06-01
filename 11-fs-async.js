const { readFile, writeFile } = require('fs')

console.log('start');
readFile('./folder/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)

    const first = result

    readFile('./folder/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(result)

        const second = result

        writeFile(
            './folder/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            { flag: 'a' },
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log('done');
            }
        )
    })
})
console.log('starting next');