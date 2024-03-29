const fs = require('fs');

// Wait x seconds...
setTimeout(() => {
    console.log('Starting operations...');

    // Read the contents of some-text-file.txt
    fs.readFile('some-text-file.txt', 'utf8', (err1, data1) => {
        if (err1) {
            console.error(err1);
            return;
        }

        // Read the contents of another-text-file.txt
        fs.readFile('another-text-file.txt', 'utf8', (err2, data2) => {
            if (err2) {
                console.error(err2);
                return;
            }

            // Print out combined file contents
            console.log(data1 + ' ' + data2);

            // Delete both files
            fs.unlink('some-text-file.txt', (err3) => {
                fs.unlink('another-text-file.txt', (err4) => {
                    if (err3) {
                        console.log('Unable to delete some-text-file.txt');
                    }

                    if (err4) {
                        console.log('Unable to delete another-text-file.txt');
                    }

                    console.log('Done!');
                });
            });
        });

    });

}, 2000);
