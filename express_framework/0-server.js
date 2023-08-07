let express=require('express');
let app=express();

app.use(express.static('express_framework/public'));

app.get('/',(req,res)=>{
    res.send('Hello Boluwatife, the World is yours idan!!');
})

let server=app.listen(8081,()=>{
     let host='127.0.0.1:'
    //let host=server.address().address
    let port=server.address().port

    console.log("Example app listening at http://"+host+port)
   // console.log("Example app listening at http://%s%s",host,port)
})
