const fs = require('fs');

// fs.readFile('read-me-please.txt', 'utf8', (err, contents) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log(contents);
// });

// async function start() {
//     // const contents = await fs.promises.readFile('read-me-please.txt', 'utf8');
//     // console.log(contents);

// }

// start();

// fs.writeFileSync('read-me-please.txt', 'Hello file!');

// fs.promises.writeFile('read-me-please.txt', 'Goodbye')
//     .then(() => console.log('Successfully wrote data to the file!'))
//     .catch((err) => console.error(err))

// fs.promises.appendFile('read-me-please.txt', '\nGoodbye again!')
//     .then(() => console.log('Successfully appended file!'))
//     .catch(err => console.error(err));

// fs.promises.unlink('read-me-please.txt')
//     .then(() => console.log('Successfully deleted the file!'))
//     .catch((err) => console.error(err));

// fs.promises.rename('read-me-please.txt', 'file-operations/read-me-please.txt')
//     .then(() => console.log('File moved successfully!'));

fs.promises.copyFile('read-me-please.txt', 'copy-me-please.txt')
    .then(() => console.log('File copied successfully!'));
