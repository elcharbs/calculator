console.log('Hello world!');

let sum = function (...theArgs) {
    return theArgs.reduce((sum, current) => sum + current, 0);
};

let subtract = function (...theArgs) {
    return theArgs.reduce((start, current) => start - current);
};

let multiply = function (...theArgs) {
    return theArgs.reduce((product, current) => product * current);
};

let divide = function (...theArgs) {
    return theArgs.reduce((numerator, current) => numerator / current);
};

let var1 = null, var2 = null, operator = null;

let validOperators = ['x', '*', '/', '+', '-'];
let integers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let operate = function (variableOne, variableTwo, theOperator) {
    let output = 0;
    switch (validOperators.findIndex((x) => x === theOperator)) {
        case 0:
        case 1:
            return multiply(variableOne, variableTwo);
        case 2:
            return divide(variableOne, variableTwo);
        case 3:
            return sum(variableOne, variableTwo);
        case 4:
            return subtract(variableOne, variableTwo);
        default:
            return 'ERROR';
    }
};

const buttons = document.querySelectorAll(".calculatorButton");
const displayBox = document.querySelector(".displayBox");
let displayBoxValue = null;
let output = null;
let lastButtonOperator = false;

buttons.forEach(element => {
    element.addEventListener('click', () => {
        if (element.innerHTML === 'CLEAR' || displayBox.innerHTML === 'ERROR' || displayBox.innerHTML === 'NaN') {
            displayBox.innerHTML = 0;
            var1 = null;
            var2 = null;
            operator = null;
            output = null;
            lastButtonOperator = false;
        } else if (integers.includes(element.innerHTML)) {
            if (lastButtonOperator === true) {
                displayBox.innerHTML = element.innerHTML;
                lastButtonOperator = false;
            } else {
                displayBoxValue = (displayBox.textContent === '0') ? 
                 element.innerHTML : 
                 displayBox.textContent.concat(element.innerHTML);
                displayBox.innerHTML = displayBoxValue;
            }
        } else if (validOperators.includes(element.innerHTML)) {
            if (lastButtonOperator === false) {
                var1 = Number(displayBox.innerHTML);
                displayBox.innerHTML = 0;
                operator = element.innerHTML;
                lastButtonOperator = true;
            } else {
                var2 = Number(displayBox.innerHTML);
                operator = element.innerHTML;
                output = operate(var1, var2, operator);
                displayBox.innerHTML = output;
            }
        } else if (element.innerHTML === '=') {
            var2 = Number(displayBox.innerHTML);
            output = operate(var1, var2, operator);
            displayBox.innerHTML = output;
            var2 = output;
            lastButtonOperator = false;
        }
    })
})