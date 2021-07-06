// work in the class

// let userCart = {
// 	username : "John",
// 	password: 1234,
// 	isUserSignedIn : true,
// 	cart : {
// 		apple : 2,
// 		banana : 1,
// 		pear : 5
// 	},
// 	prices : {
// 		apple : 0.5,
// 		banana : 0.8,
// 		pear : 0.2
// 	}
// };
// userCart["username"] = "Josh";
// console.log(userCart);
// console.log(userCart["cart"]["pear"]);
// console.log(userCart["prices"]["pear"]);
// let numberPear = userCart["cart"]["pear"];
// let pricePerPear = userCart["prices"]["pear"];
// let totalPricePear = numberPear * pricePerPear;
// alert(`The pears cost ${totalPricePear} shekels to ${userCart["username"]}`)

// // 10:38
// // Change the price of the pear, so it will contain the Taxes
// // 10:40
// // 2. Ask the user for the fruit he wants between Apple, Banana and Pear
// // 3. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
// // 4. Console.log the price for the specific fruit the user wants

// userCart['prices']['apple'] *= 0.4;
// console.log(userCart)

// let userChoice = prompt('what fruit')
// console.log(userChoice.toLowerCase())


// let userPriseFruit = userCart['prices'][userChoice]
// console.log(`a ${userChoice} cost ${userPriseFruit}`)


// //key/value pair
// let userCart = {
// 	username : "John",
// 	password: 1234,
// 	isUserSignedIn : true,
// 	cart : {
// 		apple : 2,
// 		banana : 1,
// 		pear : 5
// 	},
// 	prices : {
// 		apple : 0.5,
// 		banana : 0.8646466363,
// 		pear : 0.2
// 	}
// };
// // 1. Change the price of the pear, so it will contain the Taxes
// userCart["prices"]["pear"] *= 1.17;
// console.log(userCart)
// // 2. Ask the user for the fruit he wants between Apple, Banana and Pear
// // 3. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
// let userChoice = prompt("What fruit").toLowerCase();
// console.log(userChoice);
// // 4. Console.log the price for the specific fruit the user wants
// let userPriceFruit = userCart["prices"][userChoice];
// //if userChoice is banana, it's the same as this:
// // userCart["prices"]["banana"];
// //if userChoice is apple, it's the same as this:
// userCart["prices"]["apple"];
// console.log(`A ${userChoice} cost ${userPriceFruit.toFixed(2)}`);


let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

// 1. If the user is SignedIn - show him his name and password
// 2. If not - alert the user "you need to sign in"


if (userCart['isUserSignedIn']==true){
  console.log(userCart['username'],userCart['password'])

} else {

       alert("you need to sign in")
}



1. If the user is John AND his password is 1234 - alert him "You are signed in"
2. If the user is John OR his password is 1234 - alert him "One credential is false"
3. Else,alert the user "you need to sign in"

if(userCart['username'])=='john' && userCart['password']==
== 1234){
	alert("You are signed in")
} else if (userCart["username"] == "John" || userCart["password"] == 1234) {
	alert("One credential is false")
} else {
	alert("You need to sign in")
};