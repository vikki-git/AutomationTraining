const http = require('http');

const app = http.createServer((req, res) => {
    // console.log(req.method);
    res.statusCode = 200;
    res.statusMessage = 'test';
    res.write('Hello!');
    res.end();
});

app.listen(3000);

module.exports.appl = app;
