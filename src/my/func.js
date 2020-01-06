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