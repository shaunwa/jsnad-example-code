const fs = require('fs');
const path = require('path');

const filePath = path.join('file-operations', 'a', 'b', 'c.txt');

console.log('Absolute path: ' + path.resolve('file-operations', 'a', 'b', 'c.txt'));
console.log('Basename: ' + path.basename(filePath));
console.log('Basename (w/ out extension): ' + path.basename(filePath, '.txt'));
console.log('Dirname: ' + path.dirname(filePath));
console.log('Absolute Dirname: ' + path.dirname(path.resolve(filePath)));
console.log('Extension name: ' + path.extname(filePath));
console.log('Is absolute: ' + path.isAbsolute(path.resolve(filePath)));
console.log('Is not absolute: ' + path.isAbsolute(filePath));
console.log('Normalized path: ' + path.normalize('file-operations//a/..//./a/b/../b/c.txt'));

fs.readFile(filePath, 'utf8', (err, contents) => {
    console.log(contents);
});