const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((sum, x) => sum + x);

console.log(`The sum is ${sum}`);

process.send(sum);

process.exit(1);