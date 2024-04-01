const fs = require('fs').promises;

// fs.readFile('file-1.txt', 'utf8');

// const myPromise = new Promise((resolve, reject) => {
//     resolve(1);
// });

// const myPromise2 = new Promise((resolve, reject) => {
//     resolve({ a: 1, b: 2 });
// });

// const myPromise3 = new Promise((resolve, reject) => {
//     resolve(['a', 'b', 'c']);
// });

// myPromise
//     .then(result => {
//         console.log('First promise completed with the value ' + result);
//         return myPromise2;
//     })
//     .then(result => {
//         console.log('Second promise completed with the value ' + result);
//         return myPromise3;
//     })
//     .then(result => {
//         console.log('Third promise completed with the value ' + result);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// const fiftyFifty = new Promise((resolve, reject) => {
//     if (Math.random() < 0.5) {
//         resolve('Yay!');
//     } else {
//         reject('Darn!');
//     }
// });

// fiftyFifty
//     .then(message => console.log('Success: ' + message))
//     .catch(message => console.log('Failure: ' + message));

function createDelay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

createDelay(1000)
    .then(() => {
        console.log('One second has passed!');
        return createDelay(2000);
    })
    .then(() => {
        console.log('Three seconds have passed!');
        return createDelay(3000);
    })
    .then(() => {
        console.log('Six seconds have passed!');
    });