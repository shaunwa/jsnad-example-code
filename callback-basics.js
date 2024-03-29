// function sayHello() {
//     console.log('Greetings!');
// }

// setTimeout(sayHello, 3000);

// const fs = require('fs');

// function onFileDeleted(err) {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log('File deleted successfully!');
// }

// fs.unlink('some-text-file.txt', onFileDeleted);

const fs = require('fs');

let fileContents;

function onFileRead(err, data) {
    console.log('Finished reading the file!');

    if (err) {
        console.error(err);
        return;
    }

    fileContents = data;

    setTimeout(() => {
        console.log('Here are the file contents: ' + fileContents);
    }, 100);
}

console.log('About to read the file...');

fs.readFile('some-text-file.txt', 'utf8', onFileRead);

// const fs = require('fs');

// const fileContents = fs.readFileSync('some-text-file.txt', 'utf8');

// console.log('Here are the file contents: ' + fileContents);