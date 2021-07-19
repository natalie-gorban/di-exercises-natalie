// Exercise 1 : The World Translator
// Instructions
// Hint: Use Switch Case

// Ask the user which language they speak.

// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”

// Create a few conditions :
// If the user speaks French : display “Bonjour”
// If the user speaks English : display “Hello”
// If the user speaks Hebrew : display “Shalom”
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’



let language = prompt('which language you speak?')
let languageLower = language.toLowerCase()
// alert(`You speak in a ${languageLower}language`)

switch(languageLower){
    case 'french':
        alert('Bonjour')
        break
    case 'english':
        alert('Hello')
        break
    case 'hebrew':
        alert('Shalom')
        break
    default:
        alert('01110011 01101111 01110010 01110010 01111001')

}



let colors = ["blue", "yellow", "red"];

for (let i of colors) {
   console.log(i); // logs blue, yellow, red
}

// Exercise 1 : Building Management

// Instructions:
// 1.Console.log the number of levels in the building.
// 2.Console.log how many apartments are on levels 1 and 3.
// 3.Console.log the name of the second tenant and the number of rooms he has in his apartment.
// 4.Check if the sum of Sarah and David’s rent is bigger than Dan’s rent.
// 4.1 If it is than increase Dan’s rent.


let building = {
    numberLevels : 4,
    numberOfAptByLevel : {
        "1": 3,
        "2": 4,
        "3": 9,
        "4": 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        "Sarah": [3, 990],
        "Dan":  [4, 1000],
        "David": [1, 500],
    },
}

// 1
console.log(building.numberLevels)

// 2
console.log(building.numberOfAptByLevel[1])


// 3

console.log(building.nameOfTenants[1])
console.log(building.numberOfRoomsAndRent.Dan[0])

let x = (building.numberOfRoomsAndRent.Sarah[1])
let y = (building.numberOfRoomsAndRent.David[1])
let z = (building.numberOfRoomsAndRent.Dan[1])

if(x + y > z){
    console.log('sum of Sarah and David’s rent is bigger than Dan’s rent')
    building.numberOfRoomsAndRent.David[1] = 1200
    console.log(building.numberOfRoomsAndRent)
}
else{
    console.log('sum of Sarah and David’s rent is smaller than Dan’s rent')
}



function logsName(name) {
    console.log(name);
}
logsName()



function myFunction() {
var x = document.getElementsByTagName('li')
document.getElementById('demo').innerHTML = x[1].innerHTML
}

let elems = document.getElementsByClassName('www');

for (let elem of elems) {
	elem.innerHTML = '!!!'
}