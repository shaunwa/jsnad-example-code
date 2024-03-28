const { Buffer } = require('node:buffer');
const bufferToBinary = require('./buffer-to-binary');

const personConfig = {
    name: 'string',
    age: 'number',
    hairColor: 'string',
}

function saveObjectToBuffer(config, object) {
    const buffers = [];

    Object.keys(config).forEach(key => {
        const value = object[key];
        const type = config[key];

        if (type === 'string') {
            const stringBuffer = Buffer.from(value, 'utf8');
            const lengthBuffer = Buffer.alloc(4);
            lengthBuffer.writeUInt32BE(stringBuffer.length);

            buffers.push(lengthBuffer);
            buffers.push(stringBuffer);
        } else if (type ==='number') {
            const buffer = Buffer.alloc(8);
            buffer.writeDoubleBE(value);
            buffers.push(buffer);
        }
    });

    return Buffer.concat(buffers);
}

const buffer = saveObjectToBuffer(personConfig, { name: 'Shaun', age: 123, hairColor: 'brown' });
console.log(bufferToBinary(buffer));

function loadObjectFromBuffer(config, buffer) {
    let offset = 0;
    const obj = {};

    Object.keys(config).forEach(key => {
        const type = config[key]; 

        if (type === 'string') {
            const length = buffer.readUInt32BE(offset);
            offset += 4;

            obj[key] = buffer.toString('utf8', offset, offset + length);
            offset += length;
        } else if (type === 'number') {
            obj[key] = buffer.readDoubleBE(offset);
            offset += 8;
        }
    });

    return obj;
}

const loadedObj = loadObjectFromBuffer(personConfig, buffer);
console.log(loadedObj);