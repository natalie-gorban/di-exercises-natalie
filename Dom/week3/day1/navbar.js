console.log('\nExercise 1')
//  1.1
let div = document.getElementById('navBar')
console.log(div)


const elem = div.setAttribute('id', 'socialNetworkNavigation')
 console.log(elem)

// 1.2
let ula = document.querySelector('ul')
console.log(ula)

// 1.2.1
const newLi = document.createElement('li')


// 1.2.2
var newText = document.createTextNode('Logout')

// 1.2.3
newLi.appendChild(newText);

// 1.2.4
ula.appendChild(newLi);
