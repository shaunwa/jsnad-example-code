const fs = require('fs');

function loadFileCapsCB(path, cb) {
    fs.readFile(path, (err, data) => {
        cb(data.toString().toUpperCase());
    });
}

function loadFileCapsP(path) {
    return new Promise((resolve, reject) => {
        loadFileCapsCB(path, resolve);
    });
}

module.exports = {
    loadFileCapsCB,
    loadFileCapsP,
};