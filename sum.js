const fs = require('fs');

const readPipe = fs.createReadStream('/tmp/ipc_example');
const writePipe = fs.createWriteStream('/tmp/ipc_example_2');

readPipe.on('data', data => {
    let sum = 0;

    numbers = JSON.parse(data);
    numbers.forEach(number => sum += number);

    let count = 0;
    const interval = setInterval(() => {
        if (count === 4) {
            clearInterval(interval);
            writePipe.end();
        }

        writePipe.write(JSON.stringify(sum));

        count++;
    }, 1000);
});