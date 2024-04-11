process.on('message', data => {
    let count = 0;

    const interval = setInterval(() => {
        process.send(count);

        if (count === data) {
            clearInterval(interval);
            process.exit(0);
        }

        count++;
    }, 1000);
});