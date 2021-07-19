// exercise 1

const multiply = (a, b) => (5 + 3)


// exercise 2

const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3);


const addTo = function(x){
    return function(y){
        return x + y
    }
}
addTo(10) === function(y){ return 10 + y }
addTo(10) === function(3){ return 10 + 3 }