"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url);
    res.end();
}).listen(8080, function () {
    console.log('listening', 'http://localhost:8080/summer');
    console.log('listening', 'http://localhost:8080/winter');
});
var url = require("url");
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = q.year + ' ' + q.month;
    res.end(txt);
}).listen(8090, function () {
    console.log('listening', 'http://localhost:8090/?year=2022&month=July');
});
