let express=require('express');
let app=express();

app.use(express.static('express_framework/public'));
app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname+'/'+'index.html');
})

app.get('/process_get',(req,res)=>{
    // prepare output in JSON format
    response={
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

let server=app.listen(8081,()=>{
    let host='127.0.0.1:'
    // let host=server.address().address
    let port=server.address().port
    
    console.log(__dirname);
    console.log('my new app listening at http://'+host+port)
    //console.log('my new app listening at http://%s:%s',host,port)
})