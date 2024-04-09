function* gen1() {
    yield* [1, 2];
    yield* Object.entries({ a: 100, b: 200, c: 300 });
    yield* 'Hello!';
}

const g = gen1();
for (let x of g) {
    console.log(x);
}

function* gen2() {
    yield 3;
    yield 4;
}

function* gen3() {
    yield* gen1();
    yield* gen2();
    yield 5;
    yield 6;
}

const g3 = gen3();