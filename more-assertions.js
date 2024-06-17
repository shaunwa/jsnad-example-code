function add(x, y) {
    return x + y;
}

function validatePassword(str) {
    return str.length >= 8;
}

function copy(obj) {
    return { ...obj };
}

function errorFunc() {
    throw new TypeError('Oh no!');
}

module.exports = {
    add,
    validatePassword,
    copy,
    errorFunc,
}