// // https://learn.javascript.ru/closure
// let name = "John";
// function sayHi() {
//     console.log("Hi, " + name);
// }
// name = "Pete";
// sayHi();

'use strict'
function makeWorker() {
    let name = "Pete";
    return function() {
        console.log(name);
    };
}
let name = "John";
// create a function
let work = makeWorker();
// call it
work();
module.exports.user = name;
console.log(this); // this - contains name
