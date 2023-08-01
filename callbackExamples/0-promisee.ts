function delayThisShit(stuff:string,delay:number){
    return new Promise((fulfilled,rejected)=>{
        setTimeout(() => {
            fulfilled(stuff);
        },delay);
    });
}
delayThisShit('travelled to Ibadan today',2000)
.then((stuff)=>{
    console.log(stuff+' it was tiring')
})
.catch((error)=>{
    console.error('Your Error:',error);
});
