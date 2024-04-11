process.on('message', numbers => {
    let sum = 0;
    numbers.forEach(number => sum += number);
    process.send(sum);
    process.exit(0);
});