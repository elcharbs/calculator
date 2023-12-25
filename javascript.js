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