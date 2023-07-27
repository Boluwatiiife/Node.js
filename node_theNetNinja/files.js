const fs=require('fs');

// reading files
fs.readFile('./docs/blog1.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());//without the string method it returns the buffer.
});
console.log('last line');//logs this first cos the one above takes a bit of time to process.(Asynchronous)

// writing files
fs.writeFile('./docs/blog1.txt','Hello guys, how\'s it going',()=>{
    console.log('file was written')
});
fs.writeFile('./docs/blog2.txt','Hello guys, welcome back!',()=>{
    console.log('file was written')
})// doesn't throw error,it creates the new file that wasnt before.


// directories
if(!fs.existsSync('./assets')){
  fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('folder created');
  })
}else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder deleted')
    })
}

// deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted!')
    })
}