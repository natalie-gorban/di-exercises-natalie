// const register = () => {
//   let userName = document.getElementById('username').value;
//   let email = document.getElementById('email').value;
//   let password = document.getElementById('password').value;

//   fetch('http://localhost:3000/register',{
//     method:'POST',
//     headers: {
//       'Content-type':'application/json'
//     },
//     body: JSON.stringify({"username": userName, "email": email, "password": password})
//   })
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(e => {
//     console.log(e);
//   })
//  }
// const login = () => {
//   let username = document.getElementById('username').value;
//   let password = document.getElementById('password').value;
//   let stringified_json = JSON.stringify({"username": username, "password": password})
//   console.log(stringified_json)
//   fetch('http://localhost:3000/login',{
//     method:'POST',
//     headers: {
//       'Content-type':'application/json'
//     },
//     body: stringified_json
//   })
//   .then(res => res.json())
//   .then(data => {
//     alert(data);
//   })
//   .catch(e => {
//     alert(e);
//   })
//  }

console.log('no need client.js for forms')
