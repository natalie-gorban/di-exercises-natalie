function makeAllCaps(array){
    console.log(`capitalizing: ${array}`)
    let promise = new Promise(function(resolve, reject){
        let capitalizedArray = array.map(string => {
            if(typeof string != 'string'){
                reject(`capitalizing: ${string} is not a string`)
            }
            return string.charAt(0).toUpperCase() + string.slice(1)
        })
        resolve(capitalizedArray)
    })
    return promise
}

function sortWords(array){
    for(let word of array){
        if(typeof word != 'string'){
            throw `found non-string element ${word} in ${array}`
        }
    }
    let output = array.sort()
    console.log(`sorting: ${array} -> ${output}`)
    return output
}

let arrayOfWords = ['cucumber', 'avocado', 'tomatos']
let complicatedArray = ['cucumber', 'avocado', 'tomatos', 10]

makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))

makeAllCaps(complicatedArray)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))