// read streams => to read data.
//write streams => to write data.

const fs=require('fs');

const readStreamm=fs.createReadStream('./docs/blog3.txt',{encoding:'utf8'});
// creates a read stream...the first argument inside the method says where we wanna read data from and where we wanna pass data from.
const writeStreamm=fs.createWriteStream('./docs/blogs4.txt');


readStreamm.on('data',(chunk)=>{
    // .on is an event listner, we're listening to a data event on the read stream.
    // the data event meaning it's where we get chunk of data that we can use for the stream.
    // everytime we get a new chunk of data, we fire the callback function and we get access to the new chunk of data
    console.log('-----NEW CHUNK-----')// to see where the new chunks are
    console.log(chunk);
    writeStreamm.write('\nNEW CHUNK\n');
    writeStreamm.write(chunk);
});  

// Pipe => works well when we're passing data directly from a readable stream to a writablestream.
readStreamm.pipe(writeStreamm); //basically the same thing we did before, just easier and shorter.
