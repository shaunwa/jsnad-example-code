const fs = require('fs');

setTimeout(onTimeoutCompleted, 2000);

function onTimeoutCompleted() {
    console.log('Starting operations...');

    // Read the contents of some-text-file.txt
    fs.readFile('some-text-file.txt', 'utf8', onReadFirstFile);
}

function onReadFirstFile(err, data1) {
    if (err) {
        console.error(err);
        return;
    }

    // Read the contents of another-text-file.txt
    fs.readFile('another-text-file.txt', 'utf8', (err, data2) => onReadSecondFile(err, data1, data2));
}

function onReadSecondFile(err, data1, data2) {
    if (err) {
        console.error(err);
        return;
    }

    // Print out combined file contents
    console.log(data1 + ' ' + data2);

    // Delete both files
    fs.unlink('some-text-file.txt', onFirstFileDeleted);
}

function onFirstFileDeleted(err1) {
    fs.unlink('another-text-file.txt', (err2) => onSecondFileDeleted(err1, err2));
}

function onSecondFileDeleted(err1, err2) {
    if (err1) {
        console.log('Unable to delete some-text-file.txt');
    }

    if (err2) {
        console.log('Unable to delete another-text-file.txt');
    }

    console.log('Done!');
}
