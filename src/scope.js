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

const person = {
    name: 'Max',
    age: 29,
    greet1() {
        console.log('Hi, I am ' + this.name);
    },
    greet2: function () {
        console.log('Hi, I am ' + this.name);
    },
    greet3: () => {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet1();
person.greet2();
person.greet3();

process.exit(1);
