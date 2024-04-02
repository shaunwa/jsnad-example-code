const delay = function(ms, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), ms);
    });
}

// const delayThenError = function(ms, error) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject(error), ms);
//     });
// }

const loadDataFromUrl = (url, data) => {
    console.log('Loading data from ' + url);
    return delay(1000, data);
}

// const loadFile = filePath => {
//     console.log('Loading data from file ' + filePath);
//     return delay(2000, 'Hello');
// }

// const connectToDb = url => {
//     console.log('Connecting to database on ' + url);
//     return delay(3000, 'Success!');
// }

// Promise.all([
//     loadDataFromUrl('www.mysite.com'),
//     loadFile('./file-1.txt'),
//     connectToDb('mongo://mysite.com'),
// ])
// .then(results => {
//     console.log(results);
// })
// .catch(err => {
//     console.log('Error! ' + err);
// });

// Promise.allSettled([
//     loadDataFromUrl('www.mysite.com'),
//     loadFile('./file-1.txt'),
//     connectToDb('mongo://mysite.com'),
// ])
// .then(results => {
//     const successfulOps = results.filter(result => result.status === 'fulfilled');
//     console.log(successfulOps.map(result => result.value));

//     const failedOps = results.filter(result => result.status === 'rejected');
//     failedOps.forEach(result => console.error(result.reason));
// })

let results = [];

const urls = [
    'www.site-1.com/products',
    'www.site-2.com/products',
    'www.site-3.com/products',
];

Promise.allSettled(urls.map((url, i) => loadDataFromUrl(url, i)))
    .then(results => {
        const filtered = results.filter(x => x.value % 2 === 0);
        console.log(filtered);
    });