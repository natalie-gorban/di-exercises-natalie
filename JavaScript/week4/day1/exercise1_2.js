// Exercise #1

// #1.1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
// undefined


//#1.2
var a = 0;
function q2() {
    a = 5;
}
// undefined

function q22() {
    alert(a);
}
// undefined


//#1.3
function q3() {
    window.a = "hello";
}
// undefined



function q32() {
    alert(a);
}
// undefined


//#1.4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
// undefined



//#1.5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);
// undefined



// Exercise #2

function winBattle(){
    return true;
}

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

// experiencePoints()

let experiencePoints = (winBattle())? "return 10" : "return 1"

console.log(experiencePoints)