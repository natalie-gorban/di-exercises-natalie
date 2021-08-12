const express = require('express')
const app = express()

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

app.get('/', (req, res) =>
res.json(user))

app.listen(3000)