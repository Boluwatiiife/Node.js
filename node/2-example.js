var http = require('http');
http.createServer(function (req, res) {
    res.write('Hello Boluwatife!!!');
    res.end();
}).listen(8080);
