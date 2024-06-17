function double(x) {
    return x * 2;
}

class Counter {
    constructor(startingCount = 0) {
        this._count = startingCount;
    }

    getCount() {
        return this._count;
    }

    increment() {
        this._count += 1;
    }
}

function reverse(arr) {
    const copy = [...arr];
    copy.reverse();
    return copy;
}

module.exports = {
    double,
    Counter,
    reverse,
};