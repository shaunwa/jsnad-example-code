const delay = function(ms, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), ms);
    });
}

function mapAsync(arr, fn) {
    return Promise.allSettled(arr.map(fn))
        .then(results => results.map(r => r.value));
}

const urls = [
    'www.site-1.com/products',
    'www.site-2.com/products',
    'www.site-3.com/products',
];

mapAsync(urls, url => delay(1000, 'Successfully loaded data from ' + url))
    .then((results) => {
        console.log(results);
    });