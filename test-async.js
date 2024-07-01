function loadData(url, cb) {
    if (url.length < 3) {
        cb(new TypeError('URL is too short'));
    } else {
        setTimeout(() => {
            // if (Math.random() > 0.5) {
                cb(null, { a: 1, b:2, c: 3 });
            // } else {
            //     cb(new Error('Network error'));
            // }
        }, 2000);
    }
}

function loadDataP(url) {
    return new Promise((resolve, reject) => {
        loadData(url, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = {
    loadData,
    loadDataP,
};