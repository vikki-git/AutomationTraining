// console.log(global);
// console.log(this);
// exports.user = "me"
// console.log(this);    // logs {}
// module.exports.foo = 5;
// console.log(this);   // log { foo:5 }
//
// (function () {
//     console.log(this);
// }());
//
// (function () {
//     'use strict';
//
//     console.log(this);
// }());
//
// // functions
// 'use strict';
// function func1() {
//     console.log(this);
// }
// func1();
//
// // arrow functions
// 'use strict';
// let func = () => {
//     console.log(this);
// }
// func();

// const person = {
//     name: 'Max',
//     age: 29,
//     greet1() {
//         console.log('Hi, I am ' + this.name);
//     },
//     greet2: function () {
//         console.log('Hi, I am ' + this.name);
//     },
//     greet3: () => {
//         console.log('Hi, I am ' + this.name);
//     }
// };
//
// person.greet1();
// person.greet2();
// person.greet3();
//
// process.exit(1);

// // задача 1
// let foo = {n: 1};
// let bar = foo;
// // let a = foo = {n: 2};
// foo.x = foo = {n: 2};
// // let b = foo = {n: 2};
// console.log('foo ' + JSON.stringify(foo))
// console.log('foo.x ' + JSON.stringify(foo.x))
// console.log('bar ' + JSON.stringify(bar))
// // console.log('a ' + JSON.stringify(a))
// // console.log('b ' + JSON.stringify(b))

// задача 2
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);