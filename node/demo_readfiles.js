"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080, function () {
    console.log('listening', 'http://localhost:8080');
});
