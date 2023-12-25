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