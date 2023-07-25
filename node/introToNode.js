"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var hostname = '127.0.0.1';
var port = 3000;
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    var message = 'Welcome to Backend Development!!!, good luck';
    if (req.url === '/about') {
        message = 'This is the about pagee';
    }
    res.end(message);
});
server.listen(port, hostname, function () {
    console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
console.log("Tech will change my life");
