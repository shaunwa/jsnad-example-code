// Promise.resolve(5)
//     .then(value => console.log(value));

// Promise.reject(new Error('Something is wrong!'))
//     .then(value => console.log('Impossible!'))
//     .catch(err => {
//         console.error(err);
//     });

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

function isUrl(url) {
    return false;
}

function loadUrl(url) {
    if (isUrl(url)) {
        console.log('Loading data from ' + url);
        return delay(1000, { a: 1, b: 2 });
    } else {
        return Promise.reject(new Error('That is an invalid URL'));
    }
}

loadUrl('www.google.com')
    .then(response => console.log(response))
    .catch(err => {
        console.error(err)
    });