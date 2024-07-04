function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

const n = Number(process.argv[2]); // node --inspect-brk debugging.js 5
const result = factorial(n);
console.log(`${n}! = ${result}`);