// -------------------
// Chaining promises
//---------------------
// let completed = true;
// let learnJS = new Promise(function (resolve, reject) {
//     if (completed) {
//         resolve("I have completed learning JS.");
//     } else {
//         reject("I haven't completed learning JS yet.");
//     }
// })
// //learnJS -> returns a Promise : state: fulfilled,
// // result "I have completed learning JS."
// .then(message => message.toUpperCase())
// // returns a Promise : state fulfilled,
// // result "I have completed learning JS." to uppercase
// .then(uppercasedMessage => show(uppecasedMessage.split(" ")))
// .catch(error => console.log("in the catch", error))
// const show = (result) => {
// 	console.log("result = ", result)
// }


// //  //1rst example
// let completed = true;
// let learnJS = new Promise(function (resolve, reject) {
// 	// setTimeout(() => {
// 	    if (completed) {
// 	    	console.log("After 5 seconds")
// 	    	console.log("resolve = ", resolve)
// 	        resolve("I have completed learning JS.");
// 	    } else {
// 	        reject("I haven't completed learning JS yet.");
// 	    }
// 	    console.log(learnJS)
// 	// }, 5000);
// });
// console.log(learnJS)
// //2nd example
// let mathGrade = 90;
// let learnJS = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 	    if (mathGrade >= 90) {
// 	        resolve("I'm buying you a gift");
// 	    } else {
// 	        reject("I don't love you anymore");
// 	    }
// 	    console.log(learnJS)
// 	}, 5000);
// });
// console.log(learnJS)



// let mainFunction = (item) => {
//     let firstPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof item == "string") {
//                 resolve(item.toUpperCase())
//             } else{
//                 reject(item)
//             }
//         }, 5000);
//     })
//     return firstPromise;
// }
// let myPromise = mainFunction(prompt("talk to me honey"))
// myPromise
//     .then(upperCaseString => console.log(upperCaseString.repeat(2)))
//     .catch(error => console.log(error))
//     .finally(() => console.log("congratulation"))

//my first code
// let mainFunction = (item) => {
//     let firstPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof item == "string") {
//                 resolve(item.toUpperCase())
//             } else{
//                 reject(item)
//             }
//         }, 5000);
//     })
//     .then(upperCaseString => console.log(upperCaseString.repeat(2)))
//     .catch(error => console.log(error))
//     .finally(() => console.log("congratulation"))
// }
// mainFunction("hello")
// mainFunction(4)

// Exercise2
// Instead of having a fixed category of gif.
// Fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// Depending on the word, fetch 1 random gif with the word as its category
// Display the word and the gif on the page

