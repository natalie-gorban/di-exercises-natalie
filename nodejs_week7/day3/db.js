const knex = require('knex')

    const db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'root',
      database : 'dvdrental'
    }
  });

//   db.select('country_id', 'country').from('country')
//   .then(data =>{
//       console.log(data)
//   })



  db('city')
  .where({city_id:88})
  .update({city:'Bradford'})
  .returning('city_id','city')
  .then(data =>{
      console.log(data)
  })