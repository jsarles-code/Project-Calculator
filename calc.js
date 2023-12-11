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

// Create an event listener that listens for the number buttons 0-9 and displays them in the result field when clicked.
const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        document.querySelector('#result').value += number.value;
    });
});
