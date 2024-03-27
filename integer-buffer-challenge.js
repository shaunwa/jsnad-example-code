const { Buffer } = require('node:buffer');
const bufferToBinary = require('./buffer-to-binary');

function writeInt8s(numbers) {
    const buffer = Buffer.alloc(numbers.length);

    numbers.forEach((number, i) => {
        buffer.writeInt8(number, i);
    });

    return buffer;
}

function readInt8s(buffer) {
    const numbers = [];

    for (let i = 0; i < buffer.length; i++) {
        numbers.push(buffer.readInt8(i));
    }

    return numbers;
}

const buffer = writeInt8s([1, 2, 3, 4, 5, 6]);
console.log(bufferToBinary(buffer));

const numbers = readInt8s(buffer);
console.log(numbers);