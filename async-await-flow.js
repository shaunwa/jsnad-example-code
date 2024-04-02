const delay = function(ms, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), ms);
    });
}

const delayThenError = function(ms, error) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(error), ms);
    });
}

async function one() {
    console.log('1: Starting function one...');
    const x = await delay(1000, 10);
    console.log('1: Got x!');
    const y = await delay(2000, 25);
    console.log('1: Got y!');

    const sum = x + y;
    console.log('1: The sum is ' + sum);

    return sum;
}

async function two() {
    console.log('2: Starting function two...');
    for (let i = 0; i < 10; i++) {
        console.log('2: i is ' + i);
        await delay(300);
    }
    console.log('2: Done!')
}

one();
two();