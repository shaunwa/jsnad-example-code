const fs = require('fs');

setTimeout(onTimeoutCompleted, 2000);

function onTimeoutCompleted() {
    console.log('Starting operations...');

    // Read the contents of some-text-file.txt
    fs.readFile('some-text-file.txt', 'utf8', (err, data) => onFileReadFinished(data));
    fs.readFile('another-text-file.txt', 'utf8', (err, data) => onFileReadFinished(undefined, data));
}

let file1Data;
let file2Data;

function onFileReadFinished(data1, data2) {
    if (data1) {
        file1Data = data1;
    }

    if (data2) {
        file2Data = data2;
    }

    if (file1Data && file2Data) {
        onBothFilesFinished(file1Data, file2Data);
    }
}

function onBothFilesFinished(data1, data2) {
    // Print out combined file contents
    console.log(data1 + ' ' + data2);

    // Delete both files
    fs.unlink('some-text-file.txt', (err) => onFileDeleteCompleted(true));
    fs.unlink('another-text-file.txt', (err) => onFileDeleteCompleted(undefined, true));
}

let firstFileDeleted = false;
let secondFileDeleted = false;

function onFileDeleteCompleted(first, second) {
    if (first != null) {
        firstFileDeleted = first;
    }

    if (second != null) {
        secondFileDeleted = second;
    }

    if (firstFileDeleted && secondFileDeleted) {
        onFilesDeleted();
    }
}

function onFilesDeleted() {
    console.log('Done!');
}
