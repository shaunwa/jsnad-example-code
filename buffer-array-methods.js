const { Buffer } = require('node:buffer');
const bufferToBinary = require('./buffer-to-binary');

const myBuffer = Buffer.alloc(8);

myBuffer.write('Hello');

console.log(bufferToBinary(myBuffer));

myBuffer[2] = 109;

console.log(bufferToBinary(myBuffer));

console.log(Buffer.from('Some string').length);