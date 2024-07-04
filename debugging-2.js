function add(a, b) {
    console.log('Adding numbers...');
    return a + b;
}

function subtract(a, b) {
    console.log('Subtracting numbers...');
    return a - b;
}

function multiply(a, b) {
    console.log('Multiplying numbers...');
    return a * b;
}

function double(x) {
    console.log('Doubling numbers...');
    return add(x, x);
}

function square(x) {
    console.log('Squaring numbers...');
    return multiply(x, x);
}

function run() {
    const result1 = double(10) + add(4, 5);
    const result2 = square(10);
    const result3 = subtract(10, 5);

    console.log({ result1, result2, result3 });
}

run();