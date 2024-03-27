const { Buffer } = require('node:buffer');
const bufferToBinary = require('./buffer-to-binary');

function writeFloatsBE(floats) {

}

function readFloatsBE(buffer) {

}

const buffer = writeFloatsBE([1.5, 2.3, 100.18]);
console.log(bufferToBinary(buffer));

const floats = readFloatsBE(buffer);
console.log(floats);