function timerr(argg){
    console.log(`the argument is => ${argg}`);
}

setTimeout(timerr,2000,'father Abram');

setTimeout(() => {
    timerr('mathew the fisherman')
}, 5000);
