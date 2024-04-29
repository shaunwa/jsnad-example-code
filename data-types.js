// Strings
const singleQuotes = 'Hello!';
const doubleQuotes = "Hello!";

const backTicks = `Hello!`;

console.log('\'Hello!\' is ' + singleQuotes.length + ' characters long');
console.log('He said \"It\'s not my fault\"');

console.log(`'Hello!' is ${singleQuotes.length} characters long`);
console.log(`He said "It's not my fault"`);

// Numbers
const numberOfPeople = 20;
const averageAge = 36.789;

console.log(`The type of numberOfPeople is ${typeof numberOfPeople}`);
console.log(`Here is a big number: ${1234567890123456789}`);

// BigInt
console.log(`Here is a big integer: ${12345678901234567891234567890123456789n}`);

// Booleans
const isDone = true;
const isFull = false;

// Object
const obj1 = { a: 1, b: 2, c: 3 };
const arr1 = [1, 2, 3, 4]; // technically an object!
const arr2 = { 0: 1, 1: 2, 2: 3, 3: 4 };

// Symbols
const person = {
    name: 'Shaun',
    age: 123,
    hairColor: 'brown',
};

const ageSym = Symbol('age');

person[ageSym] = Date.now();

// null (actually an object)
const person2 = {
    name: 'Shaun',
    age: null,
    hairColor: 'brown',
};

// undefined
console.log(person2.bananas);

let x;
console.log(x);