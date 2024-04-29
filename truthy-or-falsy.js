function isFalsy(x) {
    if (x) {
        return false;
    } else {
        return true;
    }
}

const isTruthy = x => !isFalsy(x);