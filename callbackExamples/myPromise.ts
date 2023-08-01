// Travelling from Ife to Lagos(Home).

const getUp=(theTime:string)=>{
    console.log('Alarm rang by '+theTime);
    return new Promise((onFulfilled,onRejected)=>{
        setTimeout(() => {
            console.log('i\'m up');
            console.log('i put off the Alarm');
        }, 4000);
    })
}
const bathroomm=(theTime:undefined)=>{
    console.log('i got into the bathroom');
    return new Promise((onFulfilled,onRejected)=>{
        setTimeout(() => {
            console.log('took my bath');
        },3000);
    })
}
const wearClothes=(clothes:string)=>{
    console.log(`i put my ${clothes} out on the chair`)
    return new Promise((onFulfilled,onRejected)=>{
        setTimeout(() => {
            console.log(`i wore my ${clothes}`);
        },3000);
    })
}


// Nested promises
getUp('05:35 AM')
.then(()=>{
    return bathroomm(undefined);
})
.then(()=>{
    return wearClothes('buba and sokoto');
})
.catch((error)=>{
    console.log(`Your Error:`,error)
});