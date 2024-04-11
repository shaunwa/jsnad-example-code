process.on('message', numbers => {
    let sum = 0;
    numbers.forEach(number => sum += number);
    console.log(`The sum is ${sum}`);
    process.send(sum);
});