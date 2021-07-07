console.log('\nExercise 1')

let colors = ['orange', 'purple', 'green', 'red'];
// colors[0] = #1;
// colors[1] = #2;
// colors[2] = #3;
for (let i = 0; i < colors.length; i++) {
    console.log('My #' + (i+1) + ' choice ' + colors[i]);
}


console.log('\nExercise 2')

let people = ['Greg', 'Mary', 'Devon', 'James'];

console.log('\nex2.1')
people.shift()
console.log(people)


console.log('\nex2.2')
let index = people.indexOf('James');
if (index !== -1) {
    people[index] = 'Jason';
} console.log(people)


console.log('\nex2.3')
people.push('Dana')
console.log(people)


console.log('\nex2.4')
for (let i = 0; i < people.length; i++){
    console.log(people[i])
}

console.log('\nex2.5')
for (let i = 0; i < people.length; i++){
    console.log(people[i])
    if( people[i] === 'Jason'){
        break
    }
}

console.log('\nex2.6')
let newpeople = people.slice(1, -1)
console.log(newpeople)


console.log('\nex2.7')
let index_mary = people.indexOf('Mary')
console.log(index_mary)



console.log('\nex2.8')
let index_foo = people.indexOf('foo')
console.log(index_foo)

console.log('\nex2.9')
let last = people[people.length -1]
console.log(last)

console.log('\nExercise 3')

let input
while(true) {

    input = prompt('input a number:','')
    if(typeof(input) === 'string' && input >= 10) {
        break
    }
}

console.log(input)


console.log('\nExercise 4')

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

let name


name = prompt('input student name:','')
if(Object.keys(guestList).indexOf(name) !== -1){
    console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`)
} else {
    console.log("Hi! I'm a guest")
}


console.log('\nExercise 5')

let family = {
    Dad: "John",
    Mommy: "Dana",
    Daughter: "Karla",

}
for(let k of Object.keys(family)) {
    console.log(k)
}
for(let k in family) {
    console.log(k)
}
for(let v of Object.values(family)) {
    console.log(v)
}
for(let k in family) {
    console.log(family[k])
}


console.log('\nExercise 6')

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
let output = ''
for(const [key, value] of Object.entries(details)) {
    output = `${output} ${key} ${value}`
}
console.log(output)


console.log('\nExercise 7')

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

let secret = ''

for (let n of names){
    secret += n[0]
}
secret = secret.split('').sort().join('')
console.log(secret)


console.log('\nDaily challenge')

for(let i = 0; i < 6; i++){
    console.log("* ".repeat(i+1))
}

for(let i = 0; i < 6; i++){
    let output = ''
    for(let j = 0; j <= i; j++){
        output += '* '
    }
    console.log(output)
}