const http = require('http');

const app = http.createServer((req, res) => {
    console.log(req.method);
    res.write('dsfsd');
    res.end();
    // process.exit(1);
});

app.listen(3000);
