"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var dt = require('./myfirstmodule');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('The Date and time are currently: ' + dt.myDateTime());
    res.end();
}).listen(8080, function () {
    console.log('listening', 'http://localhost:8080');
});
