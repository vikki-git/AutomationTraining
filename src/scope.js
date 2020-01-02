console.log(global);
console.log(this);
exports.user = "me"
console.log(this);    // logs {}
module.exports.foo = 5;
console.log(this);   // log { foo:5 }

(function () {
    console.log(this);
}());

(function () {
    'use strict';

    console.log(this);
}());

// functions
'use strict';
function func1() {
    console.log(this);
}
func1();

// arrow functions
'use strict';
let func = () => {
    console.log(this);
}
func();
