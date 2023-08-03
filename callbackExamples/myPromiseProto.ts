// Travelling from Ife to Lagos(Home).

const getUpp=(theTime:string)=>{
    console.log('Alarm rang by '+theTime);
    return new Promise((onFulfilled,onRejected)=>{
        setTimeout(() => {
            onFulfilled(theTime);
        }, 4000);
    })
}
const bathroommm=(theTime:undefined)=>{
    console.log('i got into the bathroom');
    return new Promise((onFulfilled,onRejected)=>{
        setTimeout(() => {
            onFulfilled(theTime);
        },4000);
    })
}
const wearClothess=(clothes:string)=>{
    console.log(`i put my ${clothes} out on the chair`)
    return new Promise((onFulfilled,onRejected)=>{
        setTimeout(() => {
            onFulfilled(clothes);
        },4000);
    })
}
const trekToPark=(theTime:undefined)=>{
    console.log('i carried my travelling bag and left the hostel');
    return new Promise((onFulfilled,onRejected)=>{
        setTimeout(() => {
            onFulfilled(theTime);
            console.log('i got to the park in some minutes');
        }, 4000);
    })
}
const boardingBus=(theTime:undefined)=>{
    console.log('the bus was almost filled up');
    return new Promise((correct,wrong)=>{
        setTimeout(() => {
            correct(theTime);
            console.log('i sat next to the driver')
        },4000);
    })
}
const gettToLagoss=(timee:string)=>{
    return new Promise((correct,wrong)=>{
        setTimeout(() => {
            correct(timee);
            console.log('got to Lagos in the '+timee);
        },4000);
    })
}
const theNextBus=(timee:number)=>{
    console.log('stood and waited a bit before getting the next bus');
    return new Promise((correct,wrong)=>{
        setTimeout(() => {
            correct(timee);
            console.log(`finally got a bus after waiting for ${timee} minutes`);
        },5000);
    })
}
const homeSweetHome=(timee:number,familyy:string)=>{
    //console.log('alomost home');
    console.log(`happy about the thought of seeing my ${familyy}`);
    return new Promise((correct,wrong)=>{
        setTimeout(() => {
            //correct(familyy);
            correct(timee&&familyy);
            console.log(`got home a little after ${timee} PM, and i was very happy to see my ${familyy}.`);
        },5000);
    })
}
// Nested promises
getUpp('05:35 AM')
.then(()=>{
    console.log('i\'m up...got up and put off the Alarm');
    return bathroommm(undefined);
})
.then(()=>{
    console.log('took my bath');
    return wearClothess('buba and sokoto');
})
.then((clothes)=>{
    console.log(`i wore my ${clothes}`);
    return trekToPark(undefined);
})
.then(()=>{
    return boardingBus(undefined);
})
.then(()=>{
    console.log('the journey was tiring');
    return gettToLagoss('afternoon')
})
.then(()=>{
    return theNextBus(15);
})
.then(()=>{
    return homeSweetHome(5,'mother and siblings')
})
.catch((error)=>{
    console.log(`my Error:`,error)
});