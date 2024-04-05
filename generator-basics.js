function* fibonacci() {
    let x = 1;
    let y = 1;

    yield x;
    yield y;

    while (true) {
        let next = x + y;
        x = y;
        y = next;
        yield next;
    }
}

const fib = fibonacci();

// const infinite = [...fib]; // Don't!

for (let i = 0; i < 5; i++) {
    console.log(fib.next().value);
}

// function* myGeneratorFn() {
//     yield 1;
//     yield 2;
// }

// const g1 = myGeneratorFn();

// console.log('The first value is: ' + g1.next().value);
// console.log('The second value is: ' + g1.next().value);
// console.log('The third value is: ' + g1.next().value);
// console.log('The fourth value is: ' + g1.next().value);

// const g2 = myGeneratorFn();

// console.log('The first value is: ' + g2.next().value);
// console.log('The second value is: ' + g2.next().value);
// console.log('The third value is: ' + g2.next().value);
// console.log('The fourth value is: ' + g2.next().value);

// function* dynamicGeneratorFn() {
//     for (let i = 0; i < 10; i++) {
//         yield i;
//     }
// }

// const dynamicGenerator = dynamicGeneratorFn();
// console.log('The first value is ' + dynamicGenerator.next().value);
// console.log('The second value is ' + dynamicGenerator.next().value);
// console.log('The third value is ' + dynamicGenerator.next().value);
// console.log('The fourth value is ' + dynamicGenerator.next().value);

function* range(start, end) {
    for (let i = start; i < end; i++) {
        yield i;
    }
}

for (let x of range(0, 5)) {
    console.log(x);
}

// const fiveToFifteen = range(5, 15);
// console.log(fiveToFifteen.next().value);
// console.log(fiveToFifteen.next().value);
// console.log(fiveToFifteen.next().value);
// console.log(fiveToFifteen.next().value);
// console.log(fiveToFifteen.next().value);
// console.log(fiveToFifteen.next().value);
// console.log(fiveToFifteen.next().value);
// console.log(fiveToFifteen.next().value);
// console.log(fiveToFifteen.next().value);
// console.log(fiveToFifteen.next().value);

