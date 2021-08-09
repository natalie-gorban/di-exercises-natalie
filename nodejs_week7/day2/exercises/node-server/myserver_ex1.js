const http = require('http')

const server = http.createServer(function(req, res) {
    res.writeHead(200)
    res.end(
    `<html>
        <body>
            <h2>This is my first response</h2><br>
            <h1>This is my first response</h1><br>
            <h4>This is my first response</h4>
        </body>
    </html>`)
}).listen(3000)