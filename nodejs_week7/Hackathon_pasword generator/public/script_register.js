const register = () => {
  let userName = document.getElementById('userName').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  fetch('http://localhost:3000/register',{
    method:'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify({username})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log(e);
  })
 }
const login = () => {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  fetch('http://localhost:3000/login',{
    method:'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify({"username": username, "password": password})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log(e);
  })
 }
