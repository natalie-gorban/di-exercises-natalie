// Exercise 3 : Colors #1

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// #3.1
console.log(colors.includes('Violet'))

// #3.2
colors.forEach(logArrayElements)

function logArrayElements(element, index, array) {
    console.log(`${index + 1}# choice is ${element}`)
  }
