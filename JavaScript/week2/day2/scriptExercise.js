// Exercise 1
let x = 5;
let y = 2;

if(x >= y){
    console.log('x is the biggest number')
} else {
    console.log('x is not the biggest number')
}


// Exercise 2: Chihuahua

let newDog = 'Chihuahua';
console.log(newDog.length);

console.log('newDog'.toUpperCase())
console.log('newDog'.toLowerCase())

if (newDog === 'Chihuahua'){
    console.log('I love Chihuahuas, it`s my favorite dog breed')
} else {
    console.log('I don`t care, I prefer cats')
}


// Exercise 3:
let x = 'user number'
x = 254

if ( x % 2 == 0){
  console.log('x is an even number')
} else (x % 2 !== 0)
 console.log(' x is an odd number')




// Exercise 4:

let users = ['Lea123', 'Princess45', 'cat&doglovers', 'helooo@ooo']

console.log(users.length)

let name_user1 = 'Lea123'
let name_user2 = 'Princess45'
let online = 3


if (online === 0) {
    console.log('no one is online')
} else if (online === 1) {
    console.log(name_user1 + ' is online')
} else if (online === 2) {
    console.log(name_user1, name_user2 + ' are online')
} else {
    console.log(name_user1, name_user2 + ' and 3 more are online')
}





// Daily Challenge: Not Bad

  let sentence = 'The movie is not that bad, I like it'


  let replaced = sentence.replace(/\bnot\b.*\bbad\b/, "good")

  console.log(replaced)


//   teacher's decision (Lise)

let sentence = "This dinner is not that very very bad ! You cook well";
let sentenceArray = sentence.split(" ");
console.log("sentenceArray", sentenceArray);
let wordNot = sentenceArray.indexOf("not");
let wordBad = sentenceArray.indexOf("bad");
console.log("wordNot", wordNot, "wordBad", wordBad);
if (wordNot != -1 && wordBad != -1 && wordNot<wordBad){
	sentenceArray.splice(wordNot, wordBad-wordNot + 1,"good")
	let newSentence = sentenceArray.join(" ");
	console.log("the new sentence is : ", newSentence);
} else {
	console.log(sentence)
}