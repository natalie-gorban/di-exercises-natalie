const exp = require('express');
const bp = require('body-parser');
const cors = require('cors');
const users = require('./modules/users.js');

// import exp from 'express';
// import bp from 'body-parser';

const app = exp();
// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: false }));
 // parse application/json
app.use(bp.json());

app.use(cors());

app.use('/',exp.static(__dirname+'/public'))

app.get('/login',(req,res) => {
  const {username,password} = req.query;
  console.log(username,password);
  res.send(
    {
      message:'OK'
    }
  )
})

app.get('/robots',(req,res) => {
  // go to module - use axios to get the users
  // send it back to the front
  users.users()
  .then(data => {
    res.send(data);
  })
  .catch(e => {
    res.send({message:e.message})
  })
})

app.post('/login',(req,res) => {
  console.log(req.body);
  const {username,password} = req.body;
  res.send(
    {
      message:'POST OK'
    }
  )
})

app.listen(3000);
