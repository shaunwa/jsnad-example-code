const { exec, execFile } = require('node:child_process');

const numbers = [1, 2, 3, 4, 5, 6, 7, 'rm -rf'];

// exec('node sum.js ' + numbers.join(' '), (err, stdout, stderr) => {
//     console.log(Number(stdout));
// });

execFile('node', ['sum.js', ...numbers], (err, stdout, stderr) => {
    console.log(Number(stdout));
});

// exec('ls -la', (err, stdout, stderr) => {
//     if (err) {
//         console.error(`Error while using exec: ${err}`);
//         return;
//     }

//     const splitStrings = stdout.split('\n');
//     const fileDataStrings = splitStrings.slice(1, splitStrings.length - 1);
//     const fileDataObjects = fileDataStrings.map(fds => {
//         const pieces = fds.split(/\s+/);
//         const object = {
//             permissions: pieces[0],
//             hardLinks: pieces[1],
//             owner: pieces[2],
//             group: pieces[3],
//             size: pieces[4],
//             lastModified: `${pieces[5]} ${pieces[6]} ${pieces[7]}`,
//             name: pieces[8],
//         };
//         return object;
//     });

//     console.log(fileDataObjects);
// });