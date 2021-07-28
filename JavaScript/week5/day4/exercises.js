// Exercise 1

(async () => {
    let response = await fetch("https://swapi.dev/api/starships/9/")
    let responseJson = await response.json()
    console.log(responseJson)
})()

fetch("https://swapi.dev/api/starships/9/")
    .then(response => response.json())
    .then(console.log);



// Exercise 2
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// outcome: 1. print to console 'calling'
//          2. after delay for 2 seconds
//          3.print to console promise with status Resolved and with result = 'resolved'