// Creating a Server.
const http=require('http');
const fss=require('fs');
const _=require('lodash');

const newServer=http.createServer((req,res)=>{//you can store the createServer function in a variable if you want to, but you don't have to.
    
    // lodash
    const numm=_.random(1,4);//gives a random num btw 0-20 anytime this is ran
    console.log(numm);

    const greet=_.once(()=>{
        console.log('hello guys')
    });
    greet();
    greet();

    // set header content type
    res.setHeader('Content-Type','text/html');
    let path='./viewHTML/';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='about.html';
            res.statusCode=200;
            break;
            case '/about-fo':
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
             path+='404.html';
            res.statusCode=404;
             break;
    }
    //send an html file
    fss.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
           // res.write(data);
           
            res.end(data);
        }
    })

});
newServer.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000')
});
