const multiply = (x, y) => x * y;
const sum = (x, y) => x + y;
const subtract = (x, y) => x - y;
const divide = (x, y) => x / y;
const squared = (x) => x * x;
const addOne = (x) => x + 1;
const getDate = () => new Date();

module.exports.multiply = multiply;

module.exports.calc = {
    multiply: (x, y) => x * y,
    sum: (x, y) => x + y,
    getDate,
};
