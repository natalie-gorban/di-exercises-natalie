const axios = require('axios');
const getUsers = async () => {
    try{
    const res = await axios.get('http://jsonplaceholder.typicode.com/users')
    console.log(res.data)
    }
catch(e){
    console.log(e)
    }
}

