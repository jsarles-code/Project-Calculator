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
// operate function
function operate(operator, a, b) {
    if (operator == "add") {
        return add(a, b);
    } else if (operator == "subtract") {
        return subtract(a, b);
    } else if (operator == "multiply") {
        return multiply(a, b);
    } else if (operator == "divide") {
        return divide(a, b);
    }
}
// Path: display.js
// display function that shows what buttons have been pressed
function display() {
    let display = document.getElementById("display");
    display.textContent = displayValue;
    display.textContent = displayValue;
    if (display.textContent.length > 10) {
        display.textContent = display.textContent.slice(0, 10);
    }
}
display();
// Path: buttons.js
// button event listener
let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id == "clear") {
            clear();
        } else if (button.id == "backspace") {
            backspace();
        } else if (button.id == "equals") {
            equals();
        } else if (button.classList.contains("operator")) {
            operator(button.id);
        } else {
            number(button.id);
        }
    });
});
// Path: clear.js
// clear function
function clear() {
    displayValue = "";
    display();
}
// Path: backspace.js
// backspace function
function backspace() {
    displayValue = displayValue.slice(0, -1);
    display();
}
// Path: equals.js
// equals function
function equals() {
    let operator = displayValue.match(/[^0-9.]/g);
    let numbers = displayValue.split(/[^0-9.]/g);
    let a = parseFloat(numbers[0]);
    let b = parseFloat(numbers[1]);
    displayValue = operate(operator, a, b);
    display();
}
// Path: number.js
// number function
function number(number) {
    displayValue += number;
    display();
}
// Path: operator.js
// operator function
function operator(operator) {
    displayValue += operator;
    display();
}
