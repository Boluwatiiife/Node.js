"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!!!');
}).listen(8000, function () { console.log('Hey world, this is Boluwatife server listening to traffic on port 8080'); });
