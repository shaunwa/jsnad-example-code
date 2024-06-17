function zip(arr1, arr2) {
    const obj = {};

    if (arr1.length < arr2.length) {
        throw TypeError('Array 1 is too small!');
    }

    for (let [i, key] of arr1.entries()) {
        obj[key] = arr2[i] || null;
    }

    return obj;
}

module.exports = {
    zip,
};