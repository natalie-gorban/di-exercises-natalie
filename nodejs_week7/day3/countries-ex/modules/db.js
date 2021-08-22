const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port: '5432',
    user : 'postgres',
    password : '123456',
    database : 'dvdrental'
  }
});

const getAllCountries = () => {
  return db.select('country_id','country').from('country');
}

module.exports = {
  countries: getAllCountries
}
