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

function bluebirdRace(promises) {
    return new Bluebird((resolve, reject, onCancel) => {
        function cancelOthers(promise) {
            promises.forEach(p => {
                if (p !== promise) {
                    p.cancel();
                }
            });
        }

        promises.forEach(promise => {
            promise.then(result => {
                resolve(result);
                cancelOthers(promise);
            })
            .catch(err => {
                reject(err);
                cancelOthers(promise);
            });
        });

        onCancel(() => {
            promises.forEach(p => p.cancel());
        });
    });
}

bluebirdRace([
    delay(2000, 'reject', '2000ms'),
    delay(3000, 'reject', '3000ms'),
    delay(6000, 'reject', '6000ms'),
]).cancel();