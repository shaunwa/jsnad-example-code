const { Buffer } = require('node:buffer');
const bufferToBinary = require('./buffer-to-binary');

const buffer = Buffer.from('Hello my friends');

const bufferSubarray = buffer.subarray(0, 5);

console.log(bufferToBinary(bufferSubarray));
console.log(bufferSubarray.toString());

bufferSubarray.write('Howdy doody');

console.log(bufferToBinary(buffer));
console.log(buffer.toString());
