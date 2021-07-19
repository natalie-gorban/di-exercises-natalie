let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {

        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// 1.1
let groceries2 = groceries

// 1.2
groceries2.totalPrice = '35$'
console.log(groceries.totalPrice)

// 1.3
groceries2.other.payed = 'false'
console.log(groceries2.other.payed)

// Because both are referense to the same object.