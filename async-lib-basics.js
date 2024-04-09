const fs = require('fs');
const async = require('async');

function loadFile1(cb) {
    fs.readFile('file-1.txt', 'utf8', cb);
}

function createDelay(ms, result) {
    return function delay(cb) {
        console.log('Waiting for ' + ms + ' ms');
        setTimeout(() => {
            cb(null, result);
        }, ms);
    }
}

function loadFile2(cb) {
    fs.readFile('file-2.txt', 'utf8', cb);
}

function loadFile3(cb) {
    fs.readFile('file-3.txt', 'utf8', cb);
}

async.series([
    loadFile1,
    createDelay(1000, 'Delay complete!'),
    loadFile2,
    loadFile3,
], (err, results) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(results.map(result => result.slice(0, 20)));
});