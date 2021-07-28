// -----------------
// ASYNC
// ----------------
async function sayHello(username){
	return `Hello ${username}`
}
let promise = sayHello("John");
console.log("promise = ", promise) //returns a promise
promise.then(response => console.log("response = ", response))


//-------------------------
// ASYNC AWAIT
//----------------------
//1rst example
const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  const doSomething = async () => {
    console.log("----Started waiting----")
    let test = await doSomethingAsync();
    console.log("test =", test)
    // console.log(await doSomethingAsync())
    console.log("----Finished waiting----")
  }
  console.log('Before')
  doSomething()
  console.log('After')
  //GUESS
  // 1. Before
  // 2. After
  // 3. Started waiting
  // 4. I did something
  // 5. Finished waiting
  //Real result
  // 1. Before
  // 2. Started waiting
  // 3. After
  // 4. I did something
  // 5. Finished waiting
  //2nd example
  const learnJS = () => {
    return new Promise(resolve => {
      setTimeout(() => {
          console.log("--------I learn Javascript-------");
          resolve('Javascript DONE')
      },3000)
    })
  }
  const learnReact = () => {
    return new Promise(resolve => {
      setTimeout(() => {
          console.log("--------I learn React 2 sec after JS-------")
          resolve('REACT DONE')
      }, 2000)
    })
  }
  const doSomething = async () => {
    let javascript = await learnJS();
    console.log("hello")
    console.log(javascript)
    let react = await learnReact();
    console.log(react)
  }
  console.log('Before')
  doSomething()
  console.log('After')
  //GUESS AND REAL RESULT
  // 1. Before
  // 2. After
  // After 3 second
  // 3. --------I learn Javascript-------
  // 4. Javascript DONE
  // After 2 second
  // 5. --------I learn React 2 sec after JS-------
  // 6. REACT DONE



//   Create 4 functions, that return 4 promises
// 1. The 1st function : Receive 2 famous persons name as arguments - if the names are not string -> reject, if the names are a string resolve with the array of names
// 2. The 2nd function : Receive a noun - if the noun is less than 3 letters - reject, if the noun is more than 3 letters resolve with the name of the noun
// 3. The 3rd function : Receive a city - if the city doesn't start with an uppercase letter -> reject, if the  city starts with an uppercase letter, resolve with the name of the city
// 4. The 4rh function : Receive a verb (finishing with ing) - if it doesn't end with "ing" -> reject, if the  verb ends with ing resolve with the name of the verb
// The last function, is an async function : receive all the promise, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris" (mod


const getNames = (name1, name2) => {
    let x = new Promise((resolve, reject) => {
     if (typeof name1 !== 'string' || typeof name2 !== 'string') {
         reject("not a string!")
     } else {
         let array = [name1, name2];
        resolve(array);
     }
    })
    return x;
  }
  const getNoun = (noun) => {
    let y = new Promise((resolve, reject) => {
     if (noun.length < 3) {
         reject("too short!")
     } else {
        resolve(noun);
     }
    })
    return y;
  }
  const getCity = (city) => {
    let z = new Promise((resolve, reject) => {
    let cityArray = city.split('');
    let firstLetter = cityArray[0];
     if (firstLetter !== firstLetter.toUpperCase()) {
         reject("no uppercase letter!")
     } else {
        resolve(city);
     }
    })
    return z;
  }
  const getVerb = (verb) => {
    let a = new Promise((resolve, reject) => {
     let verbArray = verb.split('');
     let verbLength = verbArray.length;
     if (verbArray[verbLength-1]!=='g' && verbArray[verbLength-2] !=='n' && verbArray[verbLength-3] !=='i') {
         reject("no ing!")
     } else {
        resolve(verb);
     }
    })
    return a;
  }
const sentence = async () => {
    let names = await getNames("Beyonce", "Barack Obama")
    let noun = await getNoun("football")
    let city = await getCity("Paris")
    let verb = await getVerb("playing")
    console.log(`${names[0]} is ${verb} ${noun} with ${names[1]} in ${city}`);
}
sentence();