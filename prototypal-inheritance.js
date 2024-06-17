class Person {
    constructor(name, age, hairColor) {
        this.name = name;
        this.age = age;
        this.hairColor = hairColor;
    }

    greet(otherName) {
        console.log(`Hello ${otherName}, my name is ${this.name}`);
    }
}

class Developer extends Person {
    constructor(name, age, hairColor, programmingLanguage) {
        super(name, age, hairColor);
        this.programmingLanguage = programmingLanguage;
    }

    greet(otherName) {
        super.greet(otherName);
        console.log(`I am a ${this.programmingLanguage} developer`);
    }
}

const personPrototype = {
    name: 'N/A',
    age: 0,
    hairColor: 'N/A',
    greet(otherName) {
        console.log(`Hello ${otherName}, my name is ${this.name}`);
    }
}

const devPrototype = Object.create(personPrototype);
devPrototype.programmingLanguage = 'Python';
devPrototype.greet = function(otherName) {
    personPrototype.greet.call(this, otherName);
    console.log(`I am a ${this.programmingLanguage} developer`);
}

const dev = Object.create(devPrototype);
dev.name = 'Shaun';
dev.age = 123;
dev.hairColor = 'brown';
dev.programmingLanguage = 'JavaScript';

dev.greet('World');