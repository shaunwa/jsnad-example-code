const fs = require('fs').promises;

let file1Data;

fs.readFile('some-text-file.txt', 'utf8')
    .then(file1 => {
        file1Data = file1;
        return fs.readFile('another-text-file.txt', 'utf8');
    })
    .then(file2Data => {
        console.log(file1Data + ' ' + file2Data);
        return fs.unlink('some-text-file.txt');
    })
    .then(() => {
        return fs.unlink('another-text-file.txt');
    })
    .then(() => {
        console.log('Success!');
    })
    .catch(err => {
        console.error(err);
    });