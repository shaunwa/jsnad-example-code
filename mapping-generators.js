function* numbers() {
    for (let i = 0; i < 10; i++) {
        console.log('numbers() is about to yield ' + i);
        yield i;
    }
}

function generatorMap(genFunc, transform) {
    return function*(...args) {
        const gen = genFunc(...args);

        for (let x of gen) {
            console.log('The mapped function is calculating the yield value');
            yield transform(x);
        }
    }
}

function generatorFilter(genFunc, predicate) {
    return function*(...args) {
        const gen = genFunc(...args);

        for (let x of gen) {
            console.log('The filtered function is checking ' + x);
            if (predicate(x)) {
                console.log('The filtered function has accepted the value');
                yield x;
            } else {
                console.log('The filtered function has ignored the value');
            }
        }
    }
}

function generatorSlice(genFunc, start, end) {
    return function*(...args) {
        const gen = genFunc(...args);

        for (let i = 0; i < start; i++) {
            gen.next();
        }

        for (let i = start; i < end; i++) {
            yield gen.next().value;
        }
    }
}

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

const primesSlice = generatorSlice(primes, 0, 10);

const p = [...primesSlice()];
console.log(p);

// const evenNumbers = generatorFilter(numbers, x => x % 2 === 0);

// for (let x of evenNumbers()) {
//     console.log(x);
// }