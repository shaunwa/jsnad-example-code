console.log(regularFunction(10, 12));
console.log(varFunction(10, 12));
console.log(arrowFunction(10, 12));

function regularFunction(a, b) {
    const sum = a + b;
    return sum;
}

console.log(regularFunction(10, 12)); // -> 22

const varFunction = function(a, b) {
    const sum = a + b;
    return sum;
}

console.log(varFunction(10, 12));

const arrowFunction = (a, b) => a + b;
const double = x => x * 2;

console.log(arrowFunction(10, 12));