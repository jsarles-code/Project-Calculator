/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtracts two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The difference between the two numbers.
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of the two numbers.
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divides two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The quotient of the two numbers.
 */
function divide(a, b) {
    return a / b;
}

// Create a variable for the first number
let a = 0;

// Create a variable for the operator. 
let operator = '';

// Create a variable for the second number.
let b = 0;

// Create and update a display variable when the number buttons are clicked
let display = document.getElementById('display');
let displayValue = '';
