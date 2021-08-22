const exp = require('express')
// const bp = require('body-parser')
const fs = require('fs')
const path = require('path')

const app = exp()

app.use('/', exp.static(__dirname +'/public'));

// app.get('/', (req, res) => {
//     res.redirect('/login')
// })

const pathStorage = path.join(__dirname, 'register.json')
const registerHtml = path.join(__dirname, 'public/register.html')
app.get('/register', (req, res) => {
  res.sendFile(registerHtml)
})
app.post('/register', (req, res) => {
  // req.params.item + req.params.amount
  console.log(`login: ${JSON.stringify(req.query)}`)
  fs.readFile(registerHtml, 'utf-8', (err, content) => {
    if (err) throw err
    fs.readFile(pathStorage, 'utf-8', (err, data) => {
      let registrationData
      if (err || data === '') registrationData = {}
      else registrationData = JSON.parse(data)

      let message
      if (registrationData.hasOwnProperty(req.query.username)){
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

const loginHtml = `${__dirname}/public/login.html`
app.get('/login', (req, res) => {
    res.sendFile(loginHtml)
})
app.post('/login', (req, res) => {
    // req.params.item + req.params.amount

    console.log(`login: ${JSON.stringify(req.query)}`)
    // console.log(req.query.username + ":" + req.query.pasword)
    fs.readFile(loginHtml, 'utf-8', (err, content) => {
        if (err) throw err

        fs.readFile(pathStorage, 'utf-8', (err, data) => {
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
                message = `Username is not registered, provided: ${JSON.stringify(req.query)}`

            }
            res.writeHead(200, {'Content-Type':'text/html'})
            updated_content = content.replace(/<div id='message'><\/div>/, `<div id='message'>${message}</div>`)

            res.end(updated_content)
        })
    })

})



app.get('/passwordGenerator', (req, res) => {
    // req.params.item + req.params.amount

    console.log(req.query)
    // console.log(req.query.username + ":" + req.query.pasword)
    fs.readFile(`${__dirname}/public/passwordGenerator.html`, 'utf-8', (err, content) => {
        if (err) throw err

        fs.readFile(path_storage, 'utf-8', (err, data) => {
            let generatorData
            if (err || data == "") generatorData = {}
            else generatorData = JSON.parse(data)

            let message
            if(req.query.hasOwnProperty('password') && generatorData.hasOwnProperty(req.query.password)){
                // message = `Hi ${req.query.username} welcome back again`

            }else{
                generatorData[req.query.password]=req.query
                // saving new registration
                let listToLocalStorage = JSON.stringify(generatorData)
                fs.writeFile(path_storage, listToLocalStorage, (e) => {
                    if (e) throw e
                })
                // message = 'Username is not registered'

            }
            res.writeHead(200, {'Content-Type':'text/html'})
            updated_content = content.replace(/<div id='login'><\/div>/, `<div id="login">${message}</div>`)

            res.end(updated_content)
        })
    })

})


app.get('/logout', (req, res) => {
    console.log("TBD")
    res.redirect('/login')
})


app.listen(3000)
