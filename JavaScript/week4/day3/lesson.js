// "John" -> return ["J", "o", "h", "n"]
// 	   -> return ["J", "O", "H", "N"]
// 	   -> "J.0.H.N"
// EXAMPLE
// 1. Split the name
// 2. Uppercase each letter
// 3. Add . between each letter (join)




function split(username){
    let newName = username.split("");
        return newName;
}
function upper(nameArray){
    let upper = nameArray.map(newName => newName.toUpperCase());
        return upper;
}
function join(nameArray2){
    let dot = nameArray2.join(".")
    return dot;
}
console.log(join(upper(split("sasha"))));

---------------------------------------------







const g = n => {
    console.log("in the g function")
    return n + 1;
  }
  const f = n => {
    console.log("in the f function")
    return n * 2;
  }
  const h = x => {
    console.log("in the h function")
    return f(g(x));
  }
  console.log(h(20)); //=> 42

--------------------------------------------

  //COMPOSITION & CURRYING
const double = x => x * 2
const square = x => x * x
// // Tradition approach
let output1 = double(2); //4
let output2 = square(output1);//4*4
console.log(output2);
// // variant two
let output_final = square(double(2));
console.log(output_final);

----------------------------------------------





const students = [
	{name: 'Rich', score: 33},
	{name: 'Peter', score: 55}
];


// use map to create a new array containing only the score of the students
// use map to create a new array of objects. If the score of the student is bigger than 50 then the object should have another property named "average" set to true, if  the score of the student is less than 50 then the object should have another property named "average" set to false. This is the result that you should get:




const newArrayStudent = [
	{name: 'Rich', score: 33, average: false},
	{name: 'Peter', score: 55, average: true}
]







// Andrey

const students = [
    {name: 'Rich', score: 33},
    {name: 'Peter', score: 55}
];
let mapped1 = students.map((item) => item["score"]);
let mapped2 = students.map((item) => {
    if(item["score"] > 50){
        item["average"] = true;
    }else{
        item["average"] = false;
    }
    return item;
});
console.log(mapped1);
console.log(mapped2);





// Lise

const students = [
    {name: 'Rich', score: 33},
    {name: 'Peter', score: 55}
];
let mapped1 = students.map((item) => item["score"]);
let mapped2 = students.map((item) => {
    if(item["score"] > 50){
        item["average"] = true;
    }else{
        item["average"] = false;
    }
    return item;
});
console.log(mapped1);
console.log(mapped2);







const restaurant = [20,15.2,10];
const priceWithVAT = restaurant.map(price => price * 1.17);
console.log("priceWithVAT = ", priceWithVAT)






// -----------------------
// REDUCE
// -----------------------
//WITHOUT Initial Value
const numbers = [1,2,3,4];
//newNum is NOT an array it's a value
const newNum = numbers.reduce((previous,next) => {
	console.log("previous = ", previous);
	console.log("next = ", next);
	return previous+next
})
console.log(newNum);
1st loop : previous is equal to 1
		 : next is equal to 2
		 : action is previous+next --> the sum is 3
2nd loop : previous is equal to 3
		 : next is equal to 3
		 : action is previous+next --> the sum is 6
3rd loop : previous is equal to 6
		 : next is equal to 4
		 : action is previous+next --> the sum is 10
// --> THE RETURN VALUE OF THE REDUCE IS 10
//WITH INITIAL VALUE
const numbers = [1,2,3,4];
//previous is the accumulator
const newNum = numbers.reduce((previous,next) => {
	console.log("previous = ", previous);
	console.log("next = ", next);
	return previous+next
}, 100)
console.log(newNum)
1st loop : previous is equal to 100
		 : next is equal to 1
		 : action is previous+next --> the sum is 101
2nd loop : previous/accumulator is equal to 101
		 : next is equal to 2
		 : action is previous+next --> the sum is 103
3nd loop : previous/accumulator is equal to 103
		 : next is equal to 3
		 : action is previous+next --> the sum is 106
4th loop : previous/accumulator is equal to 106
		 : next is equal to 4
		 : action is previous+next --> the sum is 110
// --> THE RETURN VALUE OF THE REDUCE IS 110



------------------
Chaining
------------------
// Since the filter method returns an array we can chain
// it to the map method which works on an array and vice-versa.
// This process can be applied to all the array methods which
// makes the code concise.
let wizards = [
	{
		name: 'Harry Potter',
		house: 'Gryfindor'
	},
	{
		name: 'Cedric Diggory',
		house: 'Hufflepuff'
	},
	{
		name: 'Tonks',
		house: 'Hufflepuff'
	},
	{
		name: 'Ronald Weasley',
		house: 'Gryfindor'
	},
	{
		name: 'Hermione Granger',
		house: 'Gryfindor'
	}
];
let bestWizards =  wizards.filter(wizard => wizard.house==='Gryfindor')
console.log(bestWizards)
let sayHelloToWizards = bestWizards.map(person => `Hello ${person.name}`)
console.log(sayHelloToWizards)
//bestWizards is an array of greetings
let bestWizards =  wizards
				  .filter(wizard => wizard.house==='Gryfindor')
				  .map(person => `Hello ${person.name}`)
console.log(bestWizards)