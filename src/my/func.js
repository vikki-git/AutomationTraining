// Внешняя переменная используется, только если внутри функции нет такой локальной.
let userName = 'Вася';
function showMessage() {
    let userName = "Петя"; // объявляем локальную переменную

    let message = 'Привет, ' + userName; // Петя
    console.log(message);
}
// функция создаст и будет использовать свою собственную локальную переменную userName
showMessage();
console.log( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную

// Функция всегда получает только копию значения:
function showMessage(from, text) {
    from = '*' + from + '*'; // немного украсим "from"
    console.log( from + ': ' + text );
}
let from = "Аня";
showMessage(from, "Привет"); // *Аня*: Привет
// значение "from" осталось прежним, функция изменила значение локальной переменной
console.log( from ); // Аня

// Результат функции с пустым return или без него – undefined
function doNothing() { /* пусто */ }
console.log( doNothing() === undefined ); // true


'use strict'
function sayHi() {
    console.log("Привет");
}
console.log(sayHi); // [Function: sayHi]
console.log(sayHi.toString()); // function text


function sayHi() {   // (1) создаём
    console.log("Привет");
}
let func = sayHi;    // (2) копируем
func(); // Привет    // (3) вызываем копию (работает)!
sayHi(); // Привет   //     прежняя тоже работает (почему бы нет)

// vs function expression
let sayHi = function() {
    console.log( "Привет" );
};
let func = sayHi;
func(); // Привет    // (3) вызываем копию (работает)!
sayHi(); // Привет   //     прежняя тоже работает (почему бы нет)


// Function Declaration
sayHi("Вася"); // Привет, Вася
function sayHi(name) {
    console.log( `Привет, ${name}` );
}

// // Function Expression
// sayHi("Вася"); // ошибка!
// let sayHi = function(name) {  // (*) магии больше нет
//     console.log( `Привет, ${name}` );
// };

'use strict'
let age = 18;
// в зависимости от условия объявляем функцию
if (age < 18) {
    function welcome() {
        console.log("Привет!");
    }
} else {
    function welcome() {
        console.log("Здравствуйте!");
    }
}
// ...не работает
welcome(); // Error: welcome is not defined
