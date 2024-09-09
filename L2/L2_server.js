var http = require('http');
var fs = require("fs")

const server = http.createServer((req,res) => {
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);
    console.log(`You requested ${req.url} using ${req.method} method.\n`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(3333, () => {
    console.log('Server running at http://localhost:3333/');
});