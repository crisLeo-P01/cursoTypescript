"use strict";
/* type annotations
La anotación de tipo permite especificar explícitamente
el tipo de dato que se espera que la variable almacene. */
let isDone = true; // Boolean
// ------------------
let age = 25; // Number
// ------------------
let firstName = "John"; // string
// ------------------
let hobbies = ["Reading", "Sports"]; // arrays
let scores = [90, 85, 100];
// ------------------
let randomValue = 42; // Any
randomValue = "Hello";
randomValue = true;
// ------------------
function logMessage(message) {
    console.log(message);
}
logMessage('hola mundo');
function greet(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}
console.log(greet("Alice", 25));
// ------------------
let u = undefined;
let n = null;
// ------------------
let person = {
    name: "John",
    age: 25
};
console.log(person.name, person.age);
// ------------------
// Union types: permite que una variable tenga más de un tipo
let id;
id = 101; // OK
id = "202"; // OK
const persona = {
    name: "Bob",
    age: 35
};
// ------------------
var Status;
(function (Status) {
    Status[Status["New"] = 0] = "New";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
let taskStatus = Status.InProgress;
console.log(taskStatus); // 1
