const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

fs.promises.readFile('people-persist.txt', 'utf8')
    .then(content => {
        const peopleStrings = content.split('\n');
        const people = peopleStrings.filter(x => x.includes('{')).map(ps => JSON.parse(ps));
        console.log(people);

        rl.question('Name: ', (name) => {
            rl.question('Age: ', (age) => {
                rl.question('Hair Color: ', (hairColor) => {
                    const person = { name, age, hairColor };
                    fs.promises.appendFile('people-persist.txt', JSON.stringify(person) + '\n')
                        .then(() => {
                            console.log('Success!');
                            rl.close();
                        });
                });
            });
        });
    });
