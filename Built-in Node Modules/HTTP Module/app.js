const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello! You are from root");
        res.end();
    }
    if (req.url === "/contact") {
        res.write("Hello! You are from contacts");
        res.end();
    }
    if (req.url === "/users") {
        res.write(JSON.stringify([
            { "name": "John", "email": "john@example.com" },
            { "name": "Mary", "email": "mary@example.com" },
            { "name": "Jane", "email": "jane@example.com" },
            { "name": "Patrick", "email": "patrick@example.com" }
        ]));
        res.end();
    }
});

server.listen(port);

console.log(`Listening on ${port}...`);