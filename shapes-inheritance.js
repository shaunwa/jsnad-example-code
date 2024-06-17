const shape = {
    width: 0,
    height: 0,
    area() {
        throw Error('The area method has not been implemented!');
    },
    perimeter() {
        throw Error('The perimeter method has not been implemented!');
    }
}

const rectangle = Object.create(shape);
rectangle.area = function() {
    return this.width * this.height;
}
rectangle.perimeter = function() {
    return this.width * 2 + this.height * 2
}

const r1 = Object.create(rectangle);
r1.height = 6;
r1.width = 7;
console.log(r1.area());
console.log(r1.perimeter());

const square = Object.create(rectangle);
square.checkSides = function() {
    return this.height === this.width;
}

const triangle = Object.create(shape);
triangle.area = function() {
    return this.width * this.height / 2;
}
triangle.perimeter = function() {
    return this.width + this.height + Math.sqrt(this.width * this.width + this.height * this.height);
}

const circle = Object.create(shape);
circle.checkSides = function() {
    return this.height === this.width;
}
circle.area = function() {
    return Math.PI * Math.pow(this.width / 2, 2);
}
circle.perimeter = function() {
    return this.width * Math.PI;
}

