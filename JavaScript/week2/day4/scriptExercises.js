console.log('\nExercise 1')


console.log('\nExercise 1- Part 1')
function infoAboutMe() {
    console.log('My name is Natalie');
    console.log('My age is 38 years old');
    console.log('My hobbies reading books, bake pies, play tennis');
}
infoAboutMe();


console.log('\nExercise 1- Part 2');

function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log('You name is ' + personName + ', you are ' + personAge + ' year old' + ', your favorite color is ' + personFavoriteColor);
}
infoAboutPerson('David', 45, 'blue');
infoAboutPerson('Jason', 12, 'yellow');


console.log('\nExercise 1- Part 3');

function infoAboutPersonHobbies(personName, personAge, personFavoriteColor, personHobbies){

    console.log('You name is ' + personName + ', you are ' + personAge + ' year old, your favorite color is ' + personFavoriteColor);
    for(let hobby of personHobbies){
        console.log('your favorite hobbie is ' + hobby);
    }

}

infoAboutPersonHobbies('David', 45, 'blue', ['tennis', 'painting']);
infoAboutPersonHobbies('josh', 12, 'yellow',['videoGame', 'hanging out with friends', 'playing cards']);


console.log('\nExercise 2');

let age = prompt('how old are you?', '');
function checkDriverAge(age){
    if(age < 18){
        console.log('Sorry, you are too young to drive this car. Powering off.')
    } else if(age > 18){
        console.log('You are old enough to drive, Powering On. Enjoynthe ride!')
    } else {
        console.log('Congratulations on your first year of driving. Enjoy the ride!')
    }
}
checkDriverAge(age)


console.log('\nExercise 3');

function checkNumber(){
    for(let i = 0; i <= 100; i++){
        if(i % 2 === 0){
            console.log('the number ' + i + ' is even')
        } else {
            console.log('the number ' + i + ' is odd')
        }
    }
}
checkNumber()


console.log('\nExercise 4');

function isDivisiible(divisor){
    console.log('using divisor ' + divisor)
    let outcome = ''
    let sum = 0
    for(let i = 0; i<= 500; i++){
        if(i % divisor === 0){
            outcome += i + ' '
            sum += i
        }
    }
    console.log('Outcome: ' + outcome)
    console.log('Sum: ' + sum)

}
isDivisiible(23)
isDivisiible(3)
isDivisiible(45)


console.log('\nExercise 5');



function checkBasket(){
    let amazonBasket = {
        glasses: 1,
        books: 2,
        floss: 100
    }
    let item = prompt('What is your item')
    if(item in amazonBasket){
        console.log('Your item is in the basket')
    } else {
        console.log('Your item is not in the basket')
    }
}
checkBasket()


console.log('\nExercise 6');

let values = [0.25, 0.1, 0.05, 0.01]
function changeEnough(amount, price){
    let sum = 0
    for(let i = 0; i <= 3; i++){
        sum += amount[i]*values[i]
    }
    return sum >= price
}
console.log('' + changeEnough([25, 20, 5, 0], 4.25))
console.log('' + changeEnough([2, 100, 0, 0], 14.11))
console.log('' + changeEnough([0, 0, 20, 5], 0.75))


console.log('\nExercise 7');

let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList = ['banana', 'orange', 'apple']

function myBill (){
    let bill = 0
    for(let x of shoppingList){
        if(x in stock && stock[x] !== 0){
            stock[x] -= 1
            bill += prices[x]
        }
    }
    return bill
}
console.log('' + myBill())

console.log('\nExercise 8');

function getBillTip(bill){
    let tip = 0
    if(bill < 50){
        tip = bill * 0.2
    } else if (bill > 200) {
        tip = bill * 0.1
    } else {
        tip = bill * 0.15
    }
    return [tip, (bill + tip)]
}
console.log('tip and final bill: ' + getBillTip(250))


console.log('\nDaily challenge')

function getLongestLength(input_array){
    let output = 0
    for (let x of input_array){
        if(x.length > output){
            output = x.length
        }
    }
    return output
}

function decorateWords(input_string){
    let input_array = input_string.split(', ')
    longest_length = getLongestLength(input_array)
    console.log("*".repeat(longest_length + 4))
    for (let x of input_array){
        console.log(`* ${x}${' '.repeat(longest_length - x.length)} *`)
    }
    console.log("*".repeat(longest_length + 4))
}

let input = prompt('type comma-and-space separated list of words to decorate')
// let input = 'Hello, world, in, a, frame'
decorateWords(input)