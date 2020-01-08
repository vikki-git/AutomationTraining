const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.statusCode = 200;
        res.statusMessage = 'test root page.';
        res.write('Home page!');
        res.end();
    }
    if (url === '/users' && method === 'GET') {
        res.statusCode = 200;
        res.statusMessage = 'test users';
        res.write('User list!');
        res.end();
    }
});

server.listen(3001);

module.exports.server = server;
