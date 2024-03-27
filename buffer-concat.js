const { Buffer } = require('node:buffer');
const bufferToBinary = require('./buffer-to-binary');

const buffer0 = Buffer.from('Mr.')
const buffer1 = Buffer.from('Shaun');
const buffer2 = Buffer.from('Wassell');

const combinedBuffer = Buffer.concat([buffer0, buffer1, buffer2], 20);

console.log(bufferToBinary(combinedBuffer));
console.log(combinedBuffer.toString());