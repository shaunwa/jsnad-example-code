const { Buffer } = require('node:buffer');
const bufferToBinary = require('./buffer-to-binary');

// const asciiBuffer = Buffer.from('abcdefghi', 'ascii');
// console.log(bufferToBinary(asciiBuffer).split(' ').join('\n'));

// const utf16String = 'HélloΩ中😊';
// const buffer = Buffer.alloc(4);

// [...utf16String].forEach(char => {
//     buffer.write(char, 'utf16le');
//     console.log(char + ': ' + bufferToBinary(buffer));
//     buffer.fill(0);
// });

const string = 'HélloΩ中😊';
const buffer = Buffer.from(string, 'ascii');
console.log(bufferToBinary(buffer));

const stringFromBuffer = buffer.toString('ascii');
console.log(stringFromBuffer);