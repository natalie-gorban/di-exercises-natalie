const inputItems = (e)=> {
    e.shopList()
    let items = document.getElementById('item').value
    let amount = document.getElementById('amount').value
    console.log('item', items)
    console.log('amount', amount)

}

fetch('http://localhost:3000/login',{
    method:'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify({username,password})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log(e);
  })