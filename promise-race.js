const delay = function(ms, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, ms);
    });
}

const delayThenError = function(ms, error) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(error), ms);
    });
}

// Promise.race([
//     delayThenError(1000, new Error('Task 1')),
//     delayThenError(500, new Error('Task 2')),
//     delay(2000, 'Task 3'),
// ])
// .then(result => {
//     console.log(result);
// })
// .catch(err => {
//     console.error(err);
// });

Promise.any([
    delayThenError(1000, new Error('Task 1')),
    delayThenError(500, new Error('Task 2')),
    delay(2000, 'Task 3'),
])
.then(result => {
    console.log(result);
})
.catch(err => {
    console.error(err);
});
