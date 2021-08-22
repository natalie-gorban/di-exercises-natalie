const axios = require('axios');
const mym = require('./script1.js');

console.log(mym.myfunc('bla bla bla'));

// const getUsers = async () => {
//   try{
//     const res = await axios.get('https://jsonplaceholder.typicode.com/users');
//     console.log(res.data);
//   }
//   catch(e){
//     console.log(e);
//   }
// }
//
// getUsers();
