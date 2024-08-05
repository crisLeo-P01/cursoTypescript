/* type annotations
La anotación de tipo permite especificar explícitamente 
el tipo de dato que se espera que la variable almacene. */

let isDone: boolean = true; // Boolean

// ------------------

let age: number = 25; // Number

// ------------------

let firstName: string = "John"; // string

// ------------------

let hobbies: string[] = ["Reading", "Sports"]; // arrays
let scores: Array<number> = [90, 85, 100];

// ------------------

let randomValue: any = 42; // Any
randomValue = "Hello";
randomValue = true;

// ------------------

function logMessage(message: string): void { // Void
  console.log(message);
}

logMessage('hola mundo');

function greet(name: string, age: number): string {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

console.log(greet("Alice", 25));


// ------------------

let u: undefined = undefined;
let n: null = null;

// ------------------

let person: { name: string, age: number } = { // Object
  name: "John",
  age: 25
};

console.log(person.name, person.age);

// ------------------

// Union types: permite que una variable tenga más de un tipo
let id: number | string;
id = 101; // OK
id = "202"; // OK

// ------------------

// Las interfaces permiten definir la estructura de un objeto, incluyendo sus tipos.
interface Persona {
  name: string;
  age: number;
  isEmployed?: boolean; // Propiedad opcional
}

const persona: Persona = {
  name: "Bob",
  age: 35
};

// ------------------

enum Status {
  New,
  InProgress,
  Done
}

let taskStatus: Status = Status.InProgress;
console.log(taskStatus); // 1



