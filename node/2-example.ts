let http=require('http');

http.createServer(function(req,res){
    res.write('Hello Boluwatife!!! You\'re one of GOD\'s favorites');
    res.end();
}).listen(8080,()=>{
    console.log('listening','http://localhost:8080')
});

