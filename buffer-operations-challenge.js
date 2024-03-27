const { Buffer } = require('node:buffer');
const bufferToBinary = require('./buffer-to-binary');

const buffer1 = Buffer.alloc(20);

buffer1.write('Happy coding to all!');

const copyBuffer = Buffer.alloc(10);

buffer1.copy(copyBuffer, 0, 0, 10);

const subarray = buffer1.subarray(10, 20);

buffer1.write('Good morning to you!');

const concatBuffer = Buffer.concat([copyBuffer, subarray]);

for (const byte of concatBuffer) {
    console.log(byte);
}

console.log(concatBuffer.toString());