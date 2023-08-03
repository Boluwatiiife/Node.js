// Going to the cinema with my girlfriend to see a movie.
var ironClothes = function (myClothes) {
    console.log('i ironed my ' + myClothes);
    return new Promise(function (correct, wrong) {
        try {
            setTimeout(function () {
                correct(myClothes);
            }, 3000);
        }
        catch (_a) {
            wrong;
        }
    });
};
var callBabe = function (timeee) {
    return new Promise(function (correct, wrong) {
        try {
            setTimeout(function () {
                correct(timeee);
                console.log('i finished pressing my clothes');
                console.log("i called my girlfriend ".concat(timeee, " minutes before i entered the bathroom, so she can start getting ready"));
            }, 5000);
        }
        catch (_a) {
            console.log(wrong);
        }
    });
};
var gettingReady = function (rando) {
    return new Promise(function (correct, wrong) {
        try {
            setTimeout(function () {
                correct(rando);
                console.log('i got into the bathroom');
                console.log('i had my bath and got dressed');
            }, 5000);
        }
        catch (_a) {
            wrong;
        }
    });
};
var pickedUpBabe = function (personn) {
    return new Promise(function (correct, wrong) {
        setTimeout(function () {
            correct(personn);
            console.log('called her that i\'m almost at her gate');
            console.log("got there and picked up my ".concat(personn));
        }, 5000);
    });
};
var cinemaAndTickets = function (ticketNum, snacks) {
    return new Promise(function (correct, wrong) {
        setTimeout(function () {
            correct(ticketNum);
            console.log("we got to the cinema and bought ".concat(ticketNum, " tickets"));
            console.log("we also got some ".concat(snacks, " for refreshments"));
        }, 5000);
    });
};
var watchMovieAndGoHome = function (endTime) {
    return new Promise(function (correct, wrong) {
        setTimeout(function () {
            correct(endTime);
            console.log('the movie was very intresting');
        }, 2000);
        setTimeout(function () {
            correct(endTime);
            console.log("the movie finally ended a little after ".concat(endTime, "PM, and then we headed back home."));
            console.log('Thank You!!!');
        }, 5000);
    });
};
// here comes the promises
ironClothes('jeans and black round neck')
    .then(function () {
    return callBabe(7);
})
    .then(function () {
    return gettingReady(undefined);
})
    .then(function () {
    return pickedUpBabe('girlfriend');
})
    .then(function () {
    return cinemaAndTickets(2, 'pop corn and drinks');
})
    .then(function () {
    return watchMovieAndGoHome(7);
})
    .catch(function (err) {
    console.error('this is your error idan: ' + err);
});
