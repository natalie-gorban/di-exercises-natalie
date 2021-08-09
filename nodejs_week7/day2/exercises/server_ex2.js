const http = require("http");

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/json'})
    res.end(JSON.stringify(user))
}).listen(8080)
