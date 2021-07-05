// Exercise 1

let addressNumder = 5;
let addressStreet = 'BenYehuda';
let country = 'Israel';

// Exercise 2
let globalAddress = `I live ${addressStreet} ${addressNumder} in ${country }`
console.log(globalAddress);

let myBirthYear = 1983
let futureYear = 2022
let futureAge = futureYear - myBirthYear
let possibleAge = `I will be ${futureAge} in ${futureYear}`
console.log(possibleAge);

// Exercise 3
let pets = ['cat', 'dog', 'fish', 'rabbit', 'cow']
console.log(pets);

let last = pets[pets.length - 4]
console.log(last)

pets.push('horse')
console.log(pets)

let removedItem = pets.splice(3)
console.log(pets)


console.log(pets.length)


//Exercise XP
console.log(5 + '34')

console.log(5-'4')

console.log(10%5)

console.log(5%10)

console.log('java' + 'Script')

console.log(' ' + ' ')

console.log(' ' + 0)

console.log(true + true)

console.log(true + false)

console.log(false + true)

console.log(false - true)

console.log(3 - 4)

console.log('Bob' - 'bill')


// Exercise 1: Daily Challenge


let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift();
console.log(fruits);

fruits.sort();
console.log(fruits);

fruits.push('Kiwi');
console.log(fruits);

fruits.splice(0,1);
console.log(fruits);

fruits.reverse();
console.log(fruits);




// Exercise 2:
let moreFruits = ['Banana', ['Apples', ['Oranges'], 'Blueberries']]

console.log(moreFruits[1][1][0]);

