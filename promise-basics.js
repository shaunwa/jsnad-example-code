const fs = require('fs');

// fs.readFile('file-1.txt', 'utf-8', (err, data) => {
//     if (err) return console.error(err);

//     console.log(data);
// });

const fsPromises = fs.promises;

let f1Data;
let f2Data;
let f3Data;

fsPromises.readFile('file-1.txt', 'utf-8')
    .then(data => {
        f1Data = data;
        return fsPromises.readFile('file-2.txt', 'utf-8');
    })
    .then(data => {
        f2Data = data;
        return fsPromises.readFile('file-3.txt', 'utf-8');
    })
    .then(data => {
        f3Data = data;
        return fsPromises.writeFile('file-4.txt', f1Data + f2Data + f3Data);
    })
    .then(() => {
        console.log('Done!');
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
        console.log('Task completed! Cleanup time...');
    });
