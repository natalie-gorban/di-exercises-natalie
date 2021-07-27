// Exercise 1

function compareToTen(number) {
    // const parsed = parseInt(number)
    let promise = new Promise(function(resolve, reject){
        if(number > 10){
            resolve(number + ' is greater than 10, succes!')
        } else
            reject(number + ' is less than 10, error')
        }
    )
    return promise
}

compareToTen(20)
    .then(result => console.log(result))
    .catch(error => console.log(error))

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))


// Exercise 2
// part 1
let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve
        console.log('Success1')
    }, 4000)
})


// part 2
Promise.resolve('Success2')
.then(function(value){
    console.log(value)
}).catch(function(){
    console.log('Ooops something went wrong')
})

// Exercise 3

var resolved = Promise.resolve(3)
var rejected = Promise.reject('Boo!')
