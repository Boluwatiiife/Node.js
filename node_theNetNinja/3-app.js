const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
//const Blog=require('./modelss/blog');
const { result } = require('lodash');
const blogRoutes=require('./routes/blogRoutes')
// express app
const app=express();

// connect to mongoDB 
const dbURI='mongodb+srv://boluwatiiife:qwert1234@nodebolu.mdvwkog.mongodb.net/nodebolu?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then(() => app.listen(3000))
.catch(() => console.log(`error`)); 
//register view engine
app.set('view engine','ejs'); // this lets us configure some app settings.
app.set('views','node_theNetNinja/view');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

// routes.
app.get('/',(req,res)=>{
    res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
    res.render('about',{title: 'About'});
});

//blog routes
app.use('/blogs',blogRoutes);


// 404 page
app.use((req,res)=>{//the use method is to create middleware and fire middleware functions in express
    res.status(404).render('404',{title: '404'});
});//it should go at the very bottom of your code
