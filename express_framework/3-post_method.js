let express=require('express');
let app=express();
let bodyParser=require('body-parser');

//Create application/x-www-form-urlencoded parser.
let urlencodedParser=bodyParser.urlencoded({extended:false})

app.use(express.static('express_framework/public'));
app.get('/post.html',(req,res)=>{
    res.sendFile(__dirname+'/'+'post.html');
})

app.post('/process_post',urlencodedParser,(req,res)=>{
    // prepare output in JSON format
    response={
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

let server=app.listen(8081,()=>{
    let host='127.0.0.1:'
    // let host=server.address().address
    let port=server.address().port
    
    console.log('my new app listening at http://'+host+port)
   // console.log('my new app listening at http://%s:%s',host,port)
})