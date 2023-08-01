function intervalFunc(param){
    console.log(param);
   // console.log('You can\'t stop me now!!!');
}

const timeKeeper2=setInterval(intervalFunc,1000,'let\'s gooo!');

const timeKeeper=setInterval(() => {
    intervalFunc('fuckumean!')
    console.log('what the fuck do you mean???')
}, 3000); 

setTimeout(() => {
    clearInterval(timeKeeper);// to stop the continuous running Function.
    console.log('this is the end!');
},16000);
setTimeout(() => {
    clearInterval(timeKeeper2);
    console.log('this is the other end');
},12000);