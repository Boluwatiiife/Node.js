const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const Blog=require('./modelss/blog');
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
//listen for requests
// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog',(req,res)=>{
    const blog=new Blog({
        title:'second new blog',
        snippet:' more about boluwatife\'s new blog',
        body:'detailed info about this blog'
    });

    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/all-blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/single-blog',(req,res)=>{
    Blog.findById('64c48b62a7e2ee37c8a8037f')
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
})

// routes.
app.get('/',(req,res)=>{
    const blogs=[
        {myTitle:'am i a boy?',snippet:'find out here'},
        {myTitle:'is she a girl?',snippet:'you\'re gonna find out here'},
        {myTitle:'are we related',snippet:'fucking find out here'}
    ];
    res.render('index',{myTitle: 'Home sweet home',blogs:blogs});
});
app.get('/about',(req,res)=>{
    res.render('about',{myTitle: 'About'});
});
app.get('/blogs/create',(req,res)=>{
    res.render('create',{myTitle: 'create a new Blog'});
})
// 404 page
app.use((req,res)=>{//the use method is to create middleware and fire middleware functions in express
    res.status(404).render('404',{myTitle: '404'});
});//it should go at the very bottom of your code
