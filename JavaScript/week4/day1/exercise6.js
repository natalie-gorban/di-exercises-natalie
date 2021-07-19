// Exercise 6 : Bank Details


let bankAmount = 0

let vat = 1.17

let details = ['-500', '+200', '+1000']

details.forEach(function(element, index, array) {
    switch (element.slice(0,1)) {
        case '+':
            bankAmount += parseInt(element.slice(1))
            break;
        case '-':
            bankAmount -= parseInt(element.slice(1)) * vat
            break;
    }

})
console.log(bankAmount)