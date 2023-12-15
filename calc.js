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


// Create a variable for the result.
let result = 0;

// Create a function that takes the first number a and the second number b and the operator and returns the result.
function operate(a, operator, b) {
    if (operator == '+') {
        result = add(a, b);
    } else if (operator == '-') {
        result = subtract(a, b);
    } else if (operator == '*') {
        result = multiply(a, b);
    } else if (operator == '/') {
        result = divide(a, b);
    }
    return result;
}
/**
 * Represents a collection of operation buttons.
 * @type {NodeList}
 */
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// Create the functions that populate the display when you click the number buttons. 
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText)
            calculator.updateDisplay()
        })
      })

appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
        this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
}
equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})
compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case '*':
            computation = prev * current
            break
        case '÷':
            computation = prev / current
            break
        default:
            return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
}
updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}