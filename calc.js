// add function 
function add(a, b) {
    return a + b;
}
// subtract function
function subtract(a, b) {
    return a - b;
}
// multiply function
function multiply(a, b) {
    return a * b;
}
// divide function
function divide(a, b) {
    return a / b;
}
//  Create a variable for the first number
let a = 0;

// Create a variable for the operator. 
let operator = '';

// Create a variable for the second number.
let b = 0;
// Create the functions that populate the display when you click the number buttons. 
function populateDisplay(num) {
    if (operator === '') {
        a = a * 10 + num;
        display.textContent = a;
    } else {
        b = b * 10 + num;
        display.textContent = b;
    }
}
