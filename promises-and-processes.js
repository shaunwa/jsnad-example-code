const { fork } = require('node:child_process');

function runProcessWithData(filepath, data) {
    return new Promise((resolve, reject) => {
        const cp = fork(filepath);

        cp.on('message', result => {
            resolve(result);
            cp.kill();
        });

        cp.send(data);
    });
}

const datasets = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 11],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
];

async function start() {
    const results = await Promise.all(datasets.map(dataset => runProcessWithData('./calculate-sum', dataset)));
    console.log(results);
}

start();

// function processDataSets(index = 0, results = []) {
//     return runProcessWithData('./calculate-sum.js', datasets[index])
//         .then(result => {
//             console.log(result);
//             if (index + 1 === datasets.length) {
//                 return [...results, result];
//             } else {
//                 return processDataSets(index + 1, [...results, result]);
//             }
//         });
// }

// processDataSets().then(results => {
//     console.log(results);
// });