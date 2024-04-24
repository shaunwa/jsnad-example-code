const fs = require('fs');

// const watcher = fs.watch('file-1.txt', (eventType, fileName) => {
//     console.log(fileName + ' was changed: ' + eventType);
//     console.log('Here are the new contents:');
//     fs.readFile(fileName, (err, contents) => {
//         console.log(contents.toString());
//     })
// });

// setTimeout(() => {
//     watcher.close();
//     console.log('Done watching the file');
// }, 10000);

fs.watchFile('file-1.txt', (curr, prev) => {
    console.log('File changed!');
    console.log(curr.size);
    console.log(prev.size);

    fs.readFile('file-1.txt', (err, contents) => {
        console.log(contents.toString());
    });
});