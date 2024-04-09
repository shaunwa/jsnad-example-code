const Bluebird = require('bluebird');

Bluebird.config({
    cancellation: true,
});

function delay(ms, resolveOrReject, valueOrReason) {
    return new Bluebird((resolve, reject, onCancel) => {
        const timeout = setTimeout(() => {
            if (resolveOrReject === 'resolve') {
                resolve(valueOrReason);
            } else if (resolveOrReject === 'reject') {
                reject(valueOrReason);
            }
        }, ms);

        onCancel(() => {
            console.log('Cancelling timeout...');
            clearTimeout(timeout);
            console.log('Timeout cancelled!');
        });
    })
}

delay(2000, 'resolve', { a: 1, b: 2 })
    .timeout(1000)
    .catch(TypeError, err => console.log('Error was typeerror...'))
    .catch(Bluebird.TimeoutError, err => console.log('Error was a timeout error!'))
    .catch(err => console.log('Error was not a typeerror...'));
