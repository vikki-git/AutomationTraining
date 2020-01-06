const fs = require('fs');

fs.writeFileSync('Hello Sync', 'Hello world!');
console.log('Next after writeFileSync');

fs.writeFile('Hello not blocking.', 'Hello world!', err => {
    if (err) throw err;
    console.log('File from writeFile created');
})
console.log('Next after writeFile');
