let express=require('express');
let app=express();
let fs=require('fs');

let bodyParser=require('body-parser');
let multer=require('multer');

app.use(express.static('express_framework/public'));
app.use(bodyParser.urlencoded({extended:false}));
//app.use(multer({dest: '/tmp/'}));
app.use(multer({storage:multer.memoryStorage({})}).any());

app.get('/upload.htm',(req,res)=>{
    res.sendFile(__dirname+'/'+'upload.htm');
})

app.post('/file_upload',(req,res)=>{
    console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);
    let file=__dirname+'/'+req.files.file.name;

    fs.readFile(req.files.file.path,(err,data)=>{
        fs.writeFile(file,data,(err)=>{
            if(err){
                console.log(err);
            }else{
                response={
                    message:'File uploaded successfully',
                    filename:req.files.file.name
                };
            }

            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
})

let server=app.listen(8081,()=>{
    let host='127.0.0.1:'
    // let host=server.address().address
    let port=server.address().port
    
    console.log('my new app listening at http://'+host+port)
   // console.log('my new app listening at http://%s:%s',host,port)
})