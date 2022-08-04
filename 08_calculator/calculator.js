const add = function(...args) {
    return args.reduce((num1, num2) => num1 + num2);

};

const subtract = function(...args) {
    return args.reduce((num1, num2) => num1 - num2)
};

const sum = function(...args) {
    return args.reduce((sum, num) => sum + num)

};

const multiply = function(...args) {
    return args.reduce((num1, num2) => num1 * num2)
};

const power = function(...args) {
    return args.reduce((num1, num2) => num1 ** num2)

};

const factorial = function(num) {
    let total = 1;
    for (let i = 0; i <= num; i++) {
        total = total * i
    }
    return total
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};