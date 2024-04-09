const async = require('async');

function flaky(cb) {
    console.log('About to try the operation...');
    if (Math.random() > 0.95) {
        console.log('Operation succeeded!');
        cb(null, 'Success!');
    } else {
        console.log('Operation failed!');
        cb(new Error('Something random went wrong!'));
    }
}

async.retry({ times: 5, interval: 500 }, flaky, (err, result) => {
    if (err) {
        console.log('Well, that is 5 retries. I don\'t think it\'s going work...');
        return;
    }

    console.log('Operation completed succesfully! The result is: ' + result);
});