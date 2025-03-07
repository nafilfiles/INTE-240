const http = require("https");

const server = http.createServer((req, res) => {
    res.write("Hello World!");
    res.end();
});

server.listen(3000)