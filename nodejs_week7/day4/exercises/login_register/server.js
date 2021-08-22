const exp = require('express');
const fs = require('fs')

const app = exp();

app.use('/', exp.static(__dirname +'/public'));

app.get('/', (req, res) => {
  res.redirect('/login')
})

const path_storage = `${__dirname}/register.json`
app.get('/register', (req, res) => {
    // req.params.item + req.params.amount
    console.log(req.query)
    fs.readFile(`${__dirname}/public/register.html`, 'utf-8', (err, content) => {
        if (err) throw err

        fs.readFile(path_storage, 'utf-8', (err, data) => {
            let registrationData
            if (err || data == "") registrationData = {}
            else registrationData = JSON.parse(data)

            let message
            if(registrationData.hasOwnProperty(req.query.username)){
                message = 'Username already exists'

            }else{
                registrationData[req.query.username]=req.query
                // saving new registration
                let listToLocalStorage = JSON.stringify(registrationData)
                fs.writeFile(path_storage, listToLocalStorage, (e) => {
                    if (e) throw e
                })
                message = 'Hello Your account is now created!'

            }
            res.writeHead(200, {'Content-Type':'text/html'})
            updated_content = content.replace(/<div id='register'><\/div>/, `<div id="register">${message}</div>`)

            res.end(updated_content)
        })
    })

})


app.get('/login', (req, res) => {
    // req.params.item + req.params.amount

    console.log(req.query)
    // console.log(req.query.username + ":" + req.query.pasword)
    fs.readFile(`${__dirname}/public/login.html`, 'utf-8', (err, content) => {
        if (err) throw err

        fs.readFile(path_storage, 'utf-8', (err, data) => {
            let loginData
            if (err || data == "") loginData = {}
            else loginData = JSON.parse(data)

            let message
            if(req.query.hasOwnProperty('username') && loginData.hasOwnProperty(req.query.username)){
                message = `Hi ${req.query.username} welcome back again`

            }else{
                loginData[req.query.username]=req.query
                // saving new registration
                let listToLocalStorage = JSON.stringify(loginData)
                fs.writeFile(path_storage, listToLocalStorage, (e) => {
                    if (e) throw e
                })
                message = 'Username is not registered'

            }
            res.writeHead(200, {'Content-Type':'text/html'})
            updated_content = content.replace(/<div id='login'><\/div>/, `<div id="login">${message}</div>`)

            res.end(updated_content)
        })
    })

})


app.listen(3000)
