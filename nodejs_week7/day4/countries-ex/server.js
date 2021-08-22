const exp = require('express');
const cors = require('cors');
const bp = require('body-parser');
const DB = require('./modules/db.js');

const app = exp();
app.use(cors());

app.use(bp.urlencoded({extended:false}))
app.use(bp.json());

app.use('/', exp.static(__dirname+'/public'));

app.route('/getCountries')
  .get((req,res)=>{
     DB.countries()
     .then(data=>{
       res.send(data)
     })
     .catch(e => {
       res.send({message:e.message})
     })
  })

app.post('/login',(req,res)=>{
  DB.createUser(req.body.username,req.body.password)
  .then(data => {
    console.log(data);
    res.send({message:'ok'})
  })
  .catch(e => {
    res.send({message:'username allredy exist'})
  })
})

app.listen(3000);



/*
1. create a table - users {user_id, username, password}
2. index.html - input - username, password, button - onclick => function that will fetch
the server,
3. insert the username,password to the users table
*/
