const { Buffer } = require('node:buffer');
const bufferToBinary = require('./buffer-to-binary');
const fs = require('fs').promises;

const start = async () => {
    const key = Buffer.from([235, 76, 82, 58, 123, 123, 4, 5, 6, 7]);

    const file1Data = await fs.open('file-1.txt', 'r');
    const file2Data = await fs.open('file-2.txt', 'w');

    const chunkSize = 10;
    const buffer = Buffer.alloc(chunkSize);

    let position = 0;
    let bytesRead;

    do {
        const result = await file1Data.read(buffer, 0, chunkSize, position);

        for (let i = 0; i < buffer.length; i++) {
            if (buffer[i] >= 97 && buffer[i] <= 122) {
                buffer[i] -= 32;
            }
        }
        
        // const cipheredBuffer = Buffer.from(buffer.map((buffByte, i) => buffByte ^ key[i]));
        bytesRead = result.bytesRead;

        console.log(bufferToBinary(buffer));
        console.log(buffer.toString('utf8'));

        // await file2Data.write(cipheredBuffer, 0, bytesRead);
        await file2Data.write(buffer, 0, bytesRead);

        position += chunkSize;
    } while (bytesRead > 0)

    file1Data.close();
    file2Data.close();
}

start();
