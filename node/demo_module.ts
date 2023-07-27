import*as http from 'http';
let dt=require('./myfirstmodule');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('The Date and time are currently: '+dt.myDateTime());
    res.end();
}).listen(9000,()=>{
    console.log('listening','http://localhost:9000')
});