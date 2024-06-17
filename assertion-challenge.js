function capitalize(str) {
    if (str.length === 0) {
        return str;
    }

    const firstLetter = str[0];
    const rest = str.slice(1);
    return firstLetter.toUpperCase() + rest.toLowerCase();
}

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }
}

module.exports = {
    capitalize,
    Rectangle,
};