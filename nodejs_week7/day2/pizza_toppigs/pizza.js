function make_pizza(size, ...toppings) {
    console.log(`\n Making a ${size} --inch pizza with the following toppings:`)
    for (topping of toppings) {
        console.log("- " + topping)
    }
}

module.exports = {
    make_pizza: make_pizza,
}