const fs = require('fs');
const async = require('async');

function loadFile1(cb) {
    console.log('Reading file 1...');
    fs.readFile('file-1.txt', 'utf8', (err, result) => {
        console.log('Done reading file 1...');
        cb(err, result);
    });
}

function createDelay(ms, result) {
    return function delay({ f1, f2 }, cb) {
        console.log('Waiting for ' + ms + ' ms');
        console.log(`Previous results: ${f1}, ${f2}`);
        setTimeout(() => {
            console.log('Done waiting for ' + ms + ' ms');
            cb(null, result);
        }, ms);
    }
}

function loadFile2(cb) {
    console.log('Reading file 2...');
    fs.readFile('file-2.txt', 'utf8', (err, result) => {
        console.log('Done reading file 2...');
        cb(err, result);
    });
}

function loadFile3({ f2, networkRequest }, cb) {
    console.log('Reading file 3...');
    console.log(`Previous results: ${f2}, ${networkRequest}`)
    fs.readFile('file-3.txt', 'utf8', (err, result) => {
        console.log('Done reading file 3...');
        cb(err, result);
    });
}

async.auto({
    f1: loadFile1,
    f2: loadFile2,
    f3: ['f2', 'networkRequest', loadFile3],
    networkRequest: ['f1', 'f2', createDelay(2000, { name: 'Shaun' })],
}, (err, results) => {
    console.log(results);
});