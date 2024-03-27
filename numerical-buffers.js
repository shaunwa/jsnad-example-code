const { Buffer } = require('node:buffer');
const bufferToBinary = require('./buffer-to-binary');

b1 = Buffer.alloc(8);

// Unsigned 8-bit int
// for (let i = 0; i < 256; i++) {
//     b1.writeUInt8(i);
//     console.log(bufferToBinary(b1));
// }

b1.writeUInt8(10, 0);
const eightBitUInt = b1.readUInt8(1);

console.log(eightBitUInt);

b1.writeInt16LE(12345, 1);
const sixteenBitIntLE = b1.readInt16LE(0);

console.log(sixteenBitIntLE);

// Signed 8-bit int
// for (let i = -128; i < 128; i++) {
//     b1.writeInt8(i);
//     console.log(bufferToBinary(b1));
// }

// b1.writeUInt16LE(12345);
// console.log(bufferToBinary(b1));
// b1.writeUInt16LE(12346);
// console.log(bufferToBinary(b1));

// b1.writeUInt16BE(12345);
// console.log(bufferToBinary(b1));
// b1.writeUInt16BE(12346);
// console.log(bufferToBinary(b1));

// b1.writeUInt32BE(1234567890);
// console.log(bufferToBinary(b1));
// b1.writeUInt32BE(1234567891);
// console.log(bufferToBinary(b1));

// b1.writeUInt32LE(1234567890);
// console.log(bufferToBinary(b1));
// b1.writeUInt32LE(1234567891);
// console.log(bufferToBinary(b1));

// b1.writeBigUInt64BE(1234567891234567891n);
// console.log(bufferToBinary(b1));

