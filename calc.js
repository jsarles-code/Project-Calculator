
let display = document.getElementById('display');

function press(num) {
    display.value += num;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = parseCalculationString(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function parseCalculationString(s) {
    let operations = s.split(/(\d+)/).filter(Boolean);
    let result = parseInt(operations[0]);

    for (let i = 1; i < operations.length; i += 2) {
        let operator = operations[i];
        let nextNum = parseInt(operations[i + 1]);

        switch (operator) {
            case '+':
                result += nextNum;
                break;
            case '-':
                result -= nextNum;
                break;
            // Add cases for '*', '/', etc.
        }
    }
    return result;
}