const express=require('express');

// express app
const app=express();

//listen for requests
app.listen(3000);

app.get('/',(req,res)=>{
   // res.send('<p>home pagee</p>'); //infers the typeof content that we're trying to send to the browser, and it automatically sets the content type header
    // it also infers the status code.
    res.sendFile('./viewHTML/index.html',{root:__dirname});
});
app.get('/about',(req,res)=>{
   // res.send('<p>about fucking pagee</p>');
    res.sendFile('./viewHTML/about.html',{root:__dirname});
});

// redirects
app.get('/about-uss',(req,res)=>{
    res.redirect('/about');
    // express sends this response to the browers and forces it into a new request for /about and it automatically sets the status code.
});

// 404 page
app.use((req,res)=>{//the use method is to create middleware and fire middleware functions in express
    res.status(404).sendFile('./viewHTML/404.html',{root:__dirname});
});//it should go at the very bottom of your code
