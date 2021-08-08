// 1
let largeNumber = require('./main')

const b = 5
console.log(largeNumber + b)

// 2
let http = require('http')
let server = http.createServer(function(req, res){
    console.log('I am listening....')
    res.writeHead(200)
    res.end(`<html>
    <body>My Module is:<br> ${361} <h1>Hi there at the frontend</h1>
    </body>
    </html>`)
}).listen(3000)


// 3
let today = require('./main')
console.log(today)

let http = require('http')
let server = http.createServer(function(req, res){
    res.writeHead(200)
    res.end(`The date and time are currently: ${today}`)
}).listen(8080)
