const assert = require('node:assert');
const { capitalize, Rectangle } = require('./assertion-challenge');

// Capitalizes the first character in a lowercase string
assert(capitalize('shaun') === 'Shaun');

// Capitalizes the first character and converts the rest to lowercase
assert(capitalize('sHaUn') === 'Shaun');

// Converts a single character to uppercase
assert(capitalize('b') === 'B');

// Returns an empty string if an empty string is passed
assert(capitalize('') === '');


const r1 = new Rectangle(4, 5);
assert(r1.area() === 20);

const r2 = new Rectangle(6, 7);
assert(r2.area() === 42);