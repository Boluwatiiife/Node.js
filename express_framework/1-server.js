let express=require('express');
let app=express();

// this resonds with  'Hello World' on the homepage
app.get('/',(req,res)=>{
    console.log('Got a GET request for the homepage');
    res.send('Hello GET');
})

// this responds a POST request for the homepage
app.post('/',(req,res)=>{
    console.log('Got a POST request for the homepage');
    req.send('Hello POST');
})

// this responds a DELETE request for the /del_user page.
app.delete('/del_user',(req,res)=>{
    console.log('Got a DELETE request for /del_user');
    res.send('Hello DELETE');
})

// this responds a GET request for the /list_user page.
app.get('/list_user',(req,res)=>{
    console.log('Got a GET request for /list_user');
    res.send('page Listing');
})

// this responds a GET request for abcd, ab123cd, and so on 
app.get('/ab*cd',(req,res)=>{
    console.log('Got a GET request for /ab*cd');
    res.send('Page Pattern March');
})

let server=app.listen(8081,()=>{
    let host='127.0.0.1:'
    // let host=server.address().address
    let port=server.address().port
    
    console.log('my new app listening at http://'+host+port)
    console.log('my new app listening at http://%s:%s',host,port)
})