let sum = 0;
const numbers = process.argv.slice(2).map(x => Number(x));
numbers.forEach(number => sum += number);
console.log(sum);