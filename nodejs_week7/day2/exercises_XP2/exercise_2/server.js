const express = require('express')
const app = express()

app.get('/:id', (req, res) =>{
    console.log("req.params: ", req.params),
    res.send(`{"id":"1234"}`)

})
app.listen(3000)
