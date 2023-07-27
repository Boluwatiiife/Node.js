import*as http from 'http';

const hostname='127.0.0.1';
const port=3000;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    let message='Welcome to Backend Development!!!, good luck';
    if(req.url==='/about'){
        message='This is the about pagee';
    }
    res.end(message);
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
});
