console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1

var array1 = [1, 3, 2];

console.log(Math.max(...array1));
// expected output: 3

// console.log([2, 4, 6, 8, 0, 5, 4, 3, 7, 5])
// console.log(...[2, 4, 6, 8, 0, 5, 4, 3, 7, 5])
// console.log(Math.max([2, 4, 6, 8, 0, 5, 4, 3, 7, 5]))
// console.log(Math.max(...[2, 4, 6, 8, 0, 5, 4, 3, 7, 5]))