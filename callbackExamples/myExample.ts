// Travelling from Ife to Lagos(Home).

const wakeUp:Function=(timee:String,firstCallback:Function)=>{
    console.log('Alarm sounded by '+timee);
    setTimeout(()=>{
        console.log('i\'m up!');
        console.log('i put off the Alarm');
        firstCallback(undefined,timee);
    },5000);
}

const takeBath=(timee:string,secondCalllback:Function)=>{
    console.log('i got into the bathroom');
    setTimeout(()=>{
        console.log('took my bath');
        secondCalllback(undefined,'shirt and shorts');
    },5000);
}

const dressUp=(clothes:string,thirdCallback:Function)=>{
    console.log(`i put my ${clothes} out on the bed`);
    setTimeout(()=>{
        console.log('i wore my '+clothes);
        thirdCallback(undefined,clothes);
    },5000)
}
const walkToPark=(timee:string,fourthCallback:Function)=>{
    console.log('i carried my bag and left the the hostel');
    setTimeout(()=>{
        console.log('i have gotten to the park');
        fourthCallback(undefined,timee);
    },5000);
}
const boardBus=(timee:string,fifthCallback:Function)=>{
    console.log('the bus was almost filled up');
    setTimeout(()=>{
        console.log('i picked a seat close to the window');
        fifthCallback(undefined,timee,'afternoon');
    },5000)
}
const getToLagos=(timee:string,sixthCallback:Function)=>{
    console.log('the journey was tiring');
    setTimeout(()=>{
        console.log(`got to Lagos in the afternoon`);
        sixthCallback(undefined,timee);
    },5000)
}
const boardTheNextBus=(timee:string,seventhCallback:Function)=>{
    console.log('waited a bit before getting the next bus');
    setTimeout(()=>{
        console.log('finally got a bus');
     //   console.log('entered the bus and paid the fare');
        seventhCallback(undefined,timee,'mother and siblings');
    },5000)
}
const gotHome=(timee:string,family:string)=>{
    console.log('almost at home');
    console.log('happy about the thought of seeing my '+family);
    setTimeout(()=>{
        console.log(`got home tired but i'm very very happy to see my ${family}`);
    },6000)
}

//CallBack Hell.
wakeUp('05:35AM',(err:Error,timee:string)=>{
    if(err){
        console.log(err);
        throw err;
    }takeBath(timee,(err:Error,timee:string)=>{
        if(err){
            console.log(err);
            throw err;
        }dressUp(timee,(err:Error,clothes:string)=>{
            if(err){
                console.log(err);
                throw err;
            }
            if(clothes){
                walkToPark(timee,(err:Error,timee:string)=>{
                    if(err){
                        console.log(err);
                        throw err;
                    }boardBus(timee,(err:Error,timee:string)=>{
                        if(err){
                            console.log(err);
                            throw err;
                        }getToLagos(timee,(err:Error,timee:string)=>{
                            if(err){
                                console.log(err);
                                throw err;
                            }boardTheNextBus(timee,(err:Error,timee:string,family:string)=>{
                                if(err){
                                    console.log(err);
                                    throw err;
                                }gotHome(timee,family);
                            })
                        })
                    })
                })
            }
        })
    })
})