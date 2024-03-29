const fs = require('fs');

function readAndDelete(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err1, data) => {
        fs.unlink(filePath, (err2) => {
            callback([err1, err2], data);
        });
    });
}

function saveToFile(errors, data) {
    // Handle errors...
    // Write data to file
}

function sendToServer(errors, data) {
    // Handle errors...
    // Send data in a network request...
}

readAndDelete('some-file.txt', saveToFile);

readAndDelete('some-file.txt', sendToServer);