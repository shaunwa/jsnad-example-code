function bufferToBinary(buffer) {
    let binaryString = '';

    for (const byte of buffer) {
        binaryString += byte.toString(2).padStart(8, '0') + ' ';
    }

    return binaryString;
}

function bufferToBinary2(buffer) {
    return buffer.reduce((acc, byte) => acc + byte.toString(2).padStart(8, '0') + ' ');
}

module.exports = bufferToBinary;