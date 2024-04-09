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

}

bluebirdRace([
    delay(2000, 'resolve', '2000ms'),
    delay(3000, 'resolve', '3000ms'),
    delay(6000, 'resolve', '6000ms'),
])
.then(result => console.log(result));