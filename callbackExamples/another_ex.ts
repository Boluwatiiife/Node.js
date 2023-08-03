// Going to the cinema with my girlfriend to see a movie.

const ironClothes=(myClothes:string)=>{
    console.log('i ironed my '+myClothes);
    return new Promise((correct,wrong)=>{
       try{
        setTimeout(() => {
            correct(myClothes);
        },3000);
       }catch{
        wrong
       }
    })
}
const callBabe=(timeee:number)=>{
    return new Promise((correct,wrong)=>{
        try{
            setTimeout(() => {
                correct(timeee);
                console.log('i finished pressing my clothes')
                console.log(`i called my girlfriend ${timeee} minutes before i entered the bathroom, so she can start getting ready`);
            },5000);
        }catch{
            console.log(wrong)
        }
    })
}
const gettingReady=(rando:undefined)=>{
    return new Promise((correct,wrong)=>{
        try{
            setTimeout(() => {
                correct(rando);
                console.log('i got into the bathroom');
                console.log('i had my bath and got dressed');
            },5000);
        }catch{wrong}
    })
}
const pickedUpBabe=(personn:string)=>{
    return new Promise((correct,wrong)=>{
        setTimeout(() => {
            correct(personn);
            console.log('called her that i\'m almost at her gate');
            console.log(`got there and picked up my ${personn}`);
        }, 5000);
    })
}
const cinemaAndTickets=(ticketNum:number,snacks:string)=>{
    return new Promise((correct,wrong)=>{
        setTimeout(() => {
            correct(ticketNum);
            console.log(`we got to the cinema and bought ${ticketNum} tickets`);
            console.log(`we also got some ${snacks} for refreshments`);
        }, 5000);
    })
}
const watchMovieAndGoHome=(endTime:number)=>{
    return new Promise((correct,wrong)=>{
        setTimeout(() => {
            correct(endTime);
            console.log('the movie was very intresting');
        }, 2000);
        setTimeout(() => {
            correct(endTime);
            console.log(`the movie finally ended a little after ${endTime}PM, and then we headed back home.`);
            console.log('Thank You!!!');
        }, 5000);
    })
}

// here comes the promises
ironClothes('jeans and black round neck')
.then(()=>{
    return callBabe(7)
})
.then(()=>{
    return gettingReady(undefined)
})
.then(()=>{
    return pickedUpBabe('girlfriend')
})
.then(()=>{
    return cinemaAndTickets(2,'pop corn and drinks')
})
.then(()=>{
    return watchMovieAndGoHome(7)
})
.catch((err)=>{
    console.error('this is your error idan: '+err);
})
