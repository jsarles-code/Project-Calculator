// Create variables to store the values 
let firstNumber;
let operator;
let secondNumber;

// Create a function to operate on the numbers
function operate(operator, num1, num2) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2; 
  }
}

// Function to clear the values
function clear() {
  firstNumber = '';
  operator = '';
  secondNumber = '';
}

// Function to display values
function display(val) {
  document.getElementById('display').innerText = val; 
}

// On click of number buttons
function handleNumberClick(num) {
  if (!operator) {
    firstNumber += num;
    display(firstNumber); 
  } else {
    secondNumber += num;
    display(secondNumber);
  }
}

// On click of operator buttons
function handleOperatorClick(op) {
  operator = op;
} 

// On click of equal button
function handleEqualClick() {
  let result = operate(operator, firstNumber, secondNumber);
  display(result);
  clear();
}
