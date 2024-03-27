const { Buffer } = require('node:buffer');
const bufferToBinary = require('./buffer-to-binary');

function writeFloatsBE(floats) {
    const buffer = Buffer.alloc(floats.length * 4);

    floats.forEach((float, i) => {
        buffer.writeFloatBE(float, i * 4)
    });

    return buffer;
}

function readFloatsBE(buffer) {
    const numberOfFloats = buffer.length / 4;
    const floats = [];
    for (let i = 0; i < numberOfFloats; i++) {
        floats.push(buffer.readFloatBE(i * 4));
    }
    return floats;
}

const buffer = writeFloatsBE([1.5, 2.3, 100.18]);
console.log(bufferToBinary(buffer));

const floats = readFloatsBE(buffer);
console.log(floats);