import*as http from 'http';
let fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('demofile1.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080,()=>{
    console.log('listening','http://localhost:8080')});
