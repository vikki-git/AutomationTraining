// Primitive: string, number, boolean, undefined, null, ES6: symbol
let lang1 = "js"
console.log(`lang1: ${lang1}`);

let lang2 = lang1
console.log(`lang1: ${lang2}`);

lang1 = "java"
console.log(`lang1: ${lang1}`);
console.log(`lang1: ${lang2}`);

// Reference: object, []
let user1 = {
    name: "Viktor",
    address: {town: "Lvov", street: "V Velykogo"},
    hobbies: ["reading", "swimming"],
}

let user2 = user1;

let user3 = {
    name: "Viktor",
    address: {town: "Lvov", street: "V Velykogo"},
    hobbies: ["reading", "swimming"],
}

let user4 = Object.assign({}, user1); // merges 2 objects, NOT DEEP COPY !!!! array will be still referenced at old user1.hobbies
// for deep function - use lodash
let user5 = {...user1}

let hobbies = user1.hobbies;
let hobbiesDeepCopy = user1.hobbies.slice();

user1.name = "Ostap";
user1.hobbies.push("cooking");

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);

console.log(hobbies);
console.log(hobbiesDeepCopy);
