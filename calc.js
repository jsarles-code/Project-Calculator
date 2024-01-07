<<<<<<< HEAD
import { document } from 'some-library';
import { getElementById } from 'some-library';
function appendToDisplay(value) {
      document.getElementById('display').value += value;
    }
    
    function clearDisplay() {
      getElementById('display').value = '';
    }

    function evaluate() {
      let expression = getElementById('display').value;
      let result = calculateExpression(expression);
      if (result === null) {
        getElementById('display').value = 'Error';
      } else {
        getElementById('display').value = result;
      }
    }

    function calculateExpression(expression) {
      try {
        return Function('"use strict";return (' + expression + ')')();
      } catch (error) {
        return null;
      }
    }
=======
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
>>>>>>> parent of a126488 (trying again)
