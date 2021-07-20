// ------1------

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// output: ["bread", "carrot", "potato", "chicken", "apple", "orange"]

// ------2------
const country = "USA";
console.log([...country]);
// output: [USA]


// ------Bonus------
 let newArray = [...[,,]];
 console.log(newArray);
// output ['', '', '']

// Exercise 2

let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];



var accort = users.map((item) => console.log(`hi, ${item.firstName}`))


var congratulation = users.filter((item) => item.role === 'Full Stack Resident')

for(let i of congratulation){
    console.log(`Congrats, ${i.firstName}`)
}




// Exercise 4

let student = [{name: "Ray", course: "Computer Science", isPassed: true},
               {name: "Liam", course: "Computer Science", isPassed: false},
               {name: "Jenner", course: "Information Technology", isPassed: true},
               {name: "Marco", course: "Robotics", isPassed: true},
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
               {name: "Jamie", course: "Big Data", isPassed: false}];



var congratulation2 = student.filter((item) => item.isPassed === true)

for(let q of congratulation2){
    console.log(`Congrats, ${q.name}`)
}



// Part 1
let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];



function getCarHonda(carInventory){

    let firstCar = carInventory.find(i => i.car_make === 'Honda')
    return`This is a ${firstCar.car_make} ${firstCar.car_model} from ${firstCar.car_year}`

}
getCarHonda(inventory)
console.log(getCarHonda(inventory))



// Part 2
let inventory2 = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];



function sortCarInventoryByYear(carInventory){
    return carInventory.sort(function (x, y) {
        return x.car_year - y.car_year;
    });
}


let sorted = sortCarInventoryByYear(inventory2)
console.log(sortCarInventoryByYear(sorted));