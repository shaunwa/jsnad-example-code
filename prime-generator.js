function* primes() {
    let current = 2;

    while (true) {
        if (isPrime(current)) {
            yield current;
        }

        current += 1;
    }
}

function isPrime(x) {
    for (let i = 2; i < Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        }
    }

    return x > 1;
}

const p = primes();

for (let i = 0; i < 20; i++) {
    console.log(p.next().value);
}