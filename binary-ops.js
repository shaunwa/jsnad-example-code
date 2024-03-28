const { Buffer } = require('node:buffer');
const bufferToBinary = require('./buffer-to-binary');

const someColor = Buffer.from([200, 50, 75]);

const red = Buffer.from([255, 0, 0]);
const green = Buffer.from([0, 255, 0]);
const blue = Buffer.from([0, 0, 255]);

const redComponent = Buffer.from(someColor.map((sc, i) => sc & red[i]));
const greenComponent = Buffer.from(someColor.map((sc, i) => sc & green[i]));
const blueComponent = Buffer.from(someColor.map((sc, i) => sc & blue[i]));

console.log(bufferToBinary(redComponent));
console.log(bufferToBinary(greenComponent));
console.log(bufferToBinary(blueComponent));