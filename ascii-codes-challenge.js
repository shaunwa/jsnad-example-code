const { Buffer } = require('node:buffer');

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// "Create a new buffer for every single letter" way
letters.split('').forEach(letter => console.log(letter + ': ' + bufferToBinary(Buffer.from(letter))));

// "Modify the contents of a single buffer" way
const letterBuffer = Buffer.alloc(1);

letters.split('').forEach(letter => {
    letterBuffer.write(letter);
    console.log(letter + ': ' + bufferToBinary(letterBuffer));
});

// "Single buffer with all the letters in it" way
const lettersBuffer = Buffer.from(letters);

lettersBuffer.forEach((byte, i) => {
    console.log(letters.split('')[i] + ': ' + byte.toString(2).padStart(8, '0'));
});

function bufferToBinary(buffer) {
    let binaryString = '';

    for (const byte of buffer) {
        binaryString += byte.toString(2).padStart(8, '0') + ' ';
    }

    return binaryString;
}