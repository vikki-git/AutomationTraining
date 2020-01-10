const fs = require('fs');

fs.writeFileSync('HelloSync', 'Hello world!');
console.log('Next after writeFileSync');

fs.writeFile('Hello not blocking.', 'Hello world!', err => {
    if (err) throw err;
    console.log('File from writeFile created');
    fs.readFile('./HelloSync', 'utf8', (err, file) => {
        if (err) throw err;
        console.log(file);
    })
})
console.log('Next after writeFile');

