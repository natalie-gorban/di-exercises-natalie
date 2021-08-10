const fs = require('fs')


fs.readFile('./text.txt',(err,data) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(data.toString())
    }
})

const data = fs/fs.readFileSync('./text.txt')
console.log(data.toString())
console.log('afterreading file')