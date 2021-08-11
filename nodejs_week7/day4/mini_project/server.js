const exp = require('express')
const bp = require('body-parser')
const fs = require('fs')
const path = require('path')

const app = exp()

// app.use('/', exp.static(__dirname))
const path_storage = `${__dirname}/list.json`
app.get('/', (req, res) => {
    // req.params.item + req.params.amount
    console.log(req.query.item + ":" + req.query.amount)
    fs.readFile(`${__dirname}/list.html`, 'utf-8', (err, content) => {
        if (err) throw err
        fs.readFile(path_storage, 'utf-8', (err, data) => {
            let shoppingList
            if (err || data == "") shoppingList = {}
            else shoppingList = JSON.parse(data)

            shoppingList[req.query.item] = req.query.amount

            renderedHTMLShoppingList = ""
            for(const [key, value] of Object.entries(shoppingList)){
                renderedHTMLShoppingList += `<li>${key}: ${value}</li>`
            }
            res.writeHead(200, {'Content-Type':'text/html'})
            updated_content = content.replace(/<div id='list'><\/div>/, `<div id="list"><ul>${renderedHTMLShoppingList}</ul></div>`)

            res.end(updated_content)
            let listToLocalStorage = JSON.stringify(shoppingList)
            fs.writeFile(path_storage, listToLocalStorage, (e) => {
                if (e) throw e
                console.log(`Updated in local storage: ${listToLocalStorage}`)
            })
        })
    })

}).listen(3000)