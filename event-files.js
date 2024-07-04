const EventEmitter = require('node:events');
const fs = require('fs');

class FileLoader extends EventEmitter {
    load(filePath) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                this.emit('error', err);
            } else {
                this.emit('success', data.toString());
            }
        });
    }
}

const loader = new FileLoader();

loader.on('success', fileData => {
    console.log('Done loading file, here are the contents: ' + fileData);
});

loader.on('error', err => {
    throw err;
});

loader.load('event-files.txt');