import*as http from 'http';

http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello World!!!');
}).listen(8000,()=>{console.log('listening','http://localhost:8000')});