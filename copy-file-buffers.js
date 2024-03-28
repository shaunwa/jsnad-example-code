const { Buffer } = require('node:buffer');
const bufferToBinary = require('./buffer-to-binary');
const fs = require('fs').promises;

const start = async () => {
    const file1Data = await fs.open('file-1.txt', 'r');
    const file2Data = await fs.open('file-2.txt', 'w');

    const chunkSize = 10;
    const buffer = Buffer.alloc(chunkSize);

    let position = 0;
    let bytesRead;

    do {
        const result = await file1Data.read(buffer, 0, chunkSize, position);
        bytesRead = result.bytesRead;

        console.log(bufferToBinary(buffer));
        console.log(buffer.toString('utf8'));

        await file2Data.write(buffer, 0, bytesRead);

        position += chunkSize;
    } while (bytesRead > 0)

    file1Data.close();
    file2Data.close();
}

start();
