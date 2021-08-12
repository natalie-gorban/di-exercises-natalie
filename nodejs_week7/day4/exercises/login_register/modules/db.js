const knex = require('knex');
const pws = require('p4ssw0rd')

// const db = knex({
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     port: '5432',
//     user : 'postgres',
//     password : '123456',
//     database : 'dvdrental'
//   }
// });

// const getAllCountries = () => {
//   return db.select('country_id','country').from('country');
// }

const createUser = (username,password) => {
  return db('users')
  .insert({
    firstname,
    lasname,
    email,
    username,
    password: pws.hash(password, 10)
  })
  .returning('*');
}

module.exports = {
//   countries: getAllCountries,
  createUser
}
