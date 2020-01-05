// import {userData} from "./users";
const http = require('http');
const process = require('process');
// const userData = require("./users");

const app = http.createServer((req, res) => {
    console.log(req.method);
    // res.write(userData);
    res.write('dsfsd');
    res.end();
    // process.exit(1);
});

app.listen(3000);
