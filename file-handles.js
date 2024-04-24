const fs = require('fs');

fs.open('file-1.txt', 'r+', (err, fd) => {
    console.log('File has been opened!');

    const buffer = Buffer.alloc(1);
    fs.read(fd, buffer, 0, 1, 0, (err, bytesRead) => {
        console.log('Read ' + bytesRead + ' bytes');
        console.log('Read from file: ' + buffer.toString());
    });

    const buffer2 = Buffer.from('That');
    fs.write(fd, buffer2, 0, 4, 0, (err, bytesWritten) => {
        console.log('Wrote ' + bytesWritten + ' bytes');
    });

    fs.close(fd, err => {
        console.log('File has been closed!');
    });
});