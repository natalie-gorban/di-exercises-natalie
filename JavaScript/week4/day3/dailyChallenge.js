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