let user = new Object(); // синтаксис "конструктор объекта"
let user2 = {};  // синтаксис "литерал объекта"

// Цикл «for…in»
let user3 = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user3) {
    // ключи
    console.log( key );  // name, age, isAdmin
    // значения ключей
    console.log( user3[key] ); // John, 30, true
}

// Объекты-константы
// Объект, объявленный через const, может быть изменён.
const user4 = {
    name: "John"
};
user4.age = 25; // (*)
console.log(user4.age); // 25
// Если же мы попытаемся присвоить user другое значение, то const выдаст ошибку:
// // Ошибка (нельзя переопределять константу user)
// user4 = {
//     name: "Pete"
// };