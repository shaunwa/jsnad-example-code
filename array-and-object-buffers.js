const { Buffer } = require('node:buffer');
const bufferToBinary = require('./buffer-to-binary');

const numbers = JSON.stringify({ a: 1, b: 2, c: 'Hello' });

const buffer = Buffer.from(numbers);
console.log(bufferToBinary(buffer));

const bufferContents = buffer.toString();
console.log(bufferContents);

const numbers2 = JSON.parse(bufferContents);
console.log(numbers2);