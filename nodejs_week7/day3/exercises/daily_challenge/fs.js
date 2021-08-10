const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, '0'), err =>{
//          if (err) throw new Error(err)

//        console.log('Folder opened')
//      })

// -- create file --

// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hi, this is my Notes',
//     (err) => {
//         if (err) throw err
//         console.log('file was created')
//        })
//
// -- chenge file --

// fs.appendFile(
//     path.join(__dirname, 'notes',
//     'mynotes.txt'),
//     '\nHello from append file',
//         (err) => {
//         if (err) throw err
//         console.log('File was chenget')
//         }
// )

// -- read file --
fs.readFile(
    path.join(__dirname, 'right-left.txt'),'utf-8',
    (err, data) => {
        if(err) throw err
        console.log(data)
        let right = data.replace(/</g, '').length
        let left = data.length - right
        let total = right - left
        console.log(`Total Steps: ${total}`)
    }
)
