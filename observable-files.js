const fs = require('fs');
const { Observable } = require('rxjs');

function observeFile(filePath) {
    return new Observable(subscriber => {
        fs.watchFile(filePath, (curr, prev) => {
            subscriber.next(curr.size - prev.size);
        });
    });
}

observeFile('file-1.txt').subscribe(sizeDifference => {
    console.log('The file has changed in size: ' + sizeDifference);
});