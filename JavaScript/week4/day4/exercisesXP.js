// Exercise 1

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// I am John Doe from Vancuver, Canada. Latitude (49.2827), Longitude (-123.1207)



// Exercise 2

// displayStudentInfo({first: 'Elie', last:'Schoppik'})
// // 'Your full name is Elie Schoppik'`

function displayStudentInfo({first, last}) {
    return `Your full name is ${first} ${last}`
}
let output2 = displayStudentInfo({first: 'Elie', last: 'Schoppik'})
console.log(output2)

// Exercise 3

// 3.1

const users = { user1: 18273, user2: 92833, user3: 90315 }

let arrusers = Object.entries(users)

console.log(arrusers)

// 3.2

let arrusers2 = arrusers.map((value, index) => {
    return [value[0], value [1]*2]
})
console.log(arrusers2)



// Exercise 4

class Person {
    constructor(name) {
      this.name = name;
    }
  }

  const member = new Person('John');
  console.log(typeof member);

// object
