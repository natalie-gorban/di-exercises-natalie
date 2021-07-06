let prices = [20, 12, 5, 4, 2];
let sum = prices[0] + prices[1] + prices[2] + prices[3] + prices[4];


// DAY 3 - 06/07/2021
//Daily Challenge
let sentence = "Hello World";
let subSentence = sentence.substring(2,5);
console.log("subSentence", subSentence);
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
//LESSON
// INTRODUCTION ON LOOPS
console.log("Hello");
console.log("Hello");
console.log("Hello");
//   starting point   condition
for (let counter = 1; counter <= 3; counter++) {
	if (counter == 2) {
		console.log("We are counter 2")
	} else {
		console.log("Hello", counter);
	}
}
// REVIEW ON INCREMENTATION
counter++
counter += 1
counter = counter + 1
// GLOBAL AND LOCAL SCOPE
//declaring
// GLOBAL SCOPE
let counter;
//defining
//LOCAL SCOPE
for (counter = 1; counter <= 3; counter++) {
	if (counter == 2) {
		console.log("We are counter 2");
	} else {
		console.log("Hello", counter);
	}
}
//GLOBAL SCOPE
console.log("counter : ", counter)
//GLOBAL SCOPE
let username = "John";
//LOCAL SCOPE
if (username == "John"){
	console.log("hello John");
	username = "Tom";
};
//GLOBAL SCOPE
console.log(username)
//CONSTANT VARIABLES
const taxes = 17;
taxes = 12
//ITERATING OVER AN ARRAY
let pets = ["cat", "dog", "mouse", "rabbit", "horse"];
// pets[0];
// pets[1];
// pets[2];
for (let i = 0; i <= pets.length - 1; i++){
	console.log(pets[i]);
};
// If i starts at 1 and ends at 3
// 1- i=1 --> dog
// 2- i=2 --> mouse
// 3- i=3 --> undefined
// If i starts at 0 and ends at 3
// 1- i=0 --> cat
// 2- i=1 --> dog
// 3- i=2 --> mouse
// 4 - i=3 --> undefined
let prices = [20, 12, 5, 4, 2];
// let sum = prices[0] + prices[1] + prices[2] + prices[3] + prices[4];
let sum = 0;
for (let i = 0; i <= prices.length - 1; i++){
	// sum = sum + prices[i]
	// THE SAME AS
	sum += prices[i]
	// console.log("sum is : ", sum);
};
console.log(sum);
// i = 0 - prices[0]
// i = 1 - prices[1]
// i = 2
// 1. i = 0 -> 20
// 2. i = 1 -> 12
// 3. i = 2 -> 5
//FOR  OF
let pets = ["cat", "dog", "mouse", "rabbit", "horse"];
for (let i = 0; i<= pets.length-1; i++){
	console.log(pets[i])
}
// THE SAME AS
for (let animal of pets){
	console.log("the animal is :", animal)
}
// 1- animal = cat
// 2- animal = dog
// FOR IN
let userCart = {
	username : "John",
	password: 6666,
	isUserSignedIn : true,
};
for (let key in userCart){
	console.log("key", key)
	console.log("value", userCart[key])
}
// WHILE LOOP
let username = prompt("Tell me your username");
while (username.length != 4){
	username = prompt("Tell me your username");
}
console.log("the username is : ", username)
// DO WHILE AND WHILE
let number = 0;
// DO WHILE
do {
	console.log("your number is ", number);
	number ++
} while (number < 2)
// WHILE
while (username.length != 4){
	username = prompt("Tell me your username");