// Exercise 4 : Colors #2

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];



color.forEach((num1, index) => {
    const num2 = ordinal[index];
    console.log(`${index + 1}${num2} choice is ${num1}`);
  });
