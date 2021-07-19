let body = document.querySelector('body')
console.log(body)
let div = document.createElement('div')

let  appendeddiv = body.appendChild(div)
console.log(appendeddiv)

div.id = 'blah';

function test(fruit) {
    // extract conditions to array
    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

    if (redFruits.includes(fruit)) {
      console.log('red');
    }
  }
  test('apple')