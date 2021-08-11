const exp = require('express')
const bp = require('body-parser')
const fs = require('fs')
const path = require('path')

const app = exp()

// app.use('/', exp.static(__dirname))

app.get('/', (req, res) => {
    // req.params.item + req.params.amount
    console.log(req.query)
    fs.readFile(`${__dirname}/list.html`, 'utf-8', (err, data) => {
        if (err) throw err
        res.writeHead(200, {'Content-Type':'text/html'})
        updated_data = data.replace(/<div id='list'><\/div>/, `<div id="list">${JSON.stringify(req.query)}</div>`)
        res.end(updated_data)
    })

    }).listen(3000)