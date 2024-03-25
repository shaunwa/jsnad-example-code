const { Buffer } = require('node:buffer');

const bufferOne = Buffer.alloc(8);
const bufferTwo = Buffer.alloc(4);

bufferOne.write('abcdefgh');

console.log(bufferToBinary(bufferTwo));

bufferOne.copy(bufferTwo, 0, 0, 4);

console.log(bufferToBinary(bufferTwo));

console.log(bufferTwo.toString());

function bufferToBinary(buffer) {
    let binaryString = '';

    for (const byte of buffer) {
        binaryString += byte.toString(2).padStart(8, '0') + ' ';
    }

    return binaryString;
}