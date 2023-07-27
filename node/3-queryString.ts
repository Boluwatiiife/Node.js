import*as http from 'http';

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080,()=>{
    console.log('listening','http://localhost:8080/summer');
    console.log('listening','http://localhost:8080/winter');
})

import*as url from 'url';
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    let q=url.parse(req.url,true).query;
    let txt=q.year+' '+q.month;
    res.end(txt);
}).listen(8090,()=>{
    console.log('listening','http://localhost:8090/?year=2022&month=July');
})
