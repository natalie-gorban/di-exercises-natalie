const fs = require('fs')
// console.log(fs)

// read file
fs.readFile('./text.txt',(err,data) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log(data.toString())
    }
})

const data = fs/fs.readFileSync('./text.txt')
console.log(data.toString())
console.log('afterreading file')

// write to a file
let obj = {
    usrname: 'Dan',
    password: '123456'
}
fs.writeFile('./users', JSON.stringify(obj), (err) =>{
    
} )

// append file
