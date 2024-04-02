const fs = require('fs');

// function readFile(filePath, encoding) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filePath, encoding, (err, contents) => {
//             if (err) return reject(err);
//             resolve(contents);
//         });
//     });
// }

// function unlink(filePath) {
//     return new Promise((resolve, reject) => {
//         fs.unlink(filePath, (err) => {
//             if (err) return reject(err);
//             resolve();
//         });
//     });
// }

const readFile = promisify(fs.readFile, 2);
const unlink = promisify(fs.unlink, 1);

readFile('file-1.txt', 'utf8')
    .then(contents => console.log(contents))
    .catch(err => console.error(err));

unlink('file-3.txt')
    .then(() => console.log('Deleted file successfully'))
    .catch(err => {
        console.error(err);
        console.log('Unable to delete file');
    });

function promisify(fn, cbIndex) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            const callback = (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }

            const newArgs = args;
            newArgs[cbIndex] = callback;

            fn(...newArgs);
        });
    }
}

