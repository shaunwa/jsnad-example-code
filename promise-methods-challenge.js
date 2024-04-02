
function all(promises) {
    const statuses = [];
    const results = [];

    function isFull(arr) {
        return arr.every(x => x != null);
    }

    function onFulfill(i, value, resolve) {
        statuses[i] = 'fulfilled';
        results[i] = value;

        if (statuses.length === promises.length && isFull(statuses)) {
            resolve(results);
        }
    }

    function onReject(i, error, reject) {
        statuses[i] = 'rejected';
        results[i] = error;
        reject(error);
    }

    return new Promise((resolve, reject) => {
        promises.forEach((promise, i) => {
            promise.then(result => onFulfill(i, result, resolve))
                .catch(error => onReject(i, error, reject));
        });
    });
}

const delay = function(ms, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), ms);
    });
}

const delayThenError = function(ms, error) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(error), ms);
    });
}

all([delay(1000, 'a'), delayThenError(500, new Error('Bad!')), delay(2000, 'c')])
    .then(results => console.log(results));