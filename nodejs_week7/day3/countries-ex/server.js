const exp = require('express');
const cors = require('cors');
const DB = require('./modules/db.js');

const app = exp();
app.use(cors());

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

app.listen(3000);



/*
1. create a table - users {user_id, username, password}
2. index.html - input - username, password, button - onclick => finction that will fetch
the server,
3. insert the username,password to the users table
*/
