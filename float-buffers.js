const { Buffer } = require('node:buffer');
const bufferToBinary = require('./buffer-to-binary');

function printFloatComponents(buffer) {
    let binaryString = '';

    for (const byte of buffer) {
        binaryString += byte.toString(2).padStart(8, '0');
    }

    console.log('Sign bit:    ' + binaryString.slice(0, 1));
    console.log('Exponent:    ' + binaryString.slice(1, 9));
    console.log('Significand: ' + binaryString.slice(9));
}

const b1 = Buffer.alloc(4);
b1.writeFloatLE(7);
console.log(bufferToBinary(b1));

// for (let i = 0; i < 11; i++) {
//     console.log(`For the number ${i} ----------------------`);
//     b1.writeFloatBE(i);
//     printFloatComponents(b1);
// }

// const doubleBuffer = Buffer.alloc(8);
// doubleBuffer.writeDoubleBE(7);

// console.log(bufferToBinary(doubleBuffer));