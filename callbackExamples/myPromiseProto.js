// Travelling from Ife to Lagos(Home).
var getUpp = function (theTime) {
    console.log('Alarm rang by ' + theTime);
    return new Promise(function (onFulfilled, onRejected) {
        setTimeout(function () {
            onFulfilled(theTime);
        }, 4000);
    });
};
var bathroommm = function (theTime) {
    console.log('i got into the bathroom');
    return new Promise(function (onFulfilled, onRejected) {
        setTimeout(function () {
            onFulfilled(theTime);
        }, 4000);
    });
};
var wearClothess = function (clothes) {
    console.log("i put my ".concat(clothes, " out on the chair"));
    return new Promise(function (onFulfilled, onRejected) {
        setTimeout(function () {
            onFulfilled(clothes);
        }, 4000);
    });
};
var trekToPark = function (theTime) {
    console.log('i carried my travelling bag and left the hostel');
    return new Promise(function (onFulfilled, onRejected) {
        setTimeout(function () {
            onFulfilled(theTime);
            console.log('i got to the park in some minutes');
        }, 4000);
    });
};
var boardingBus = function (theTime) {
    console.log('the bus was almost filled up');
    return new Promise(function (correct, wrong) {
        setTimeout(function () {
            correct(theTime);
            console.log('i sat next to the driver');
        }, 4000);
    });
};
var gettToLagos = function (timee) {
    return new Promise(function (correct, wrong) {
        setTimeout(function () {
            correct(timee);
            console.log('got to Lagos in the ' + timee);
        }, 4000);
    });
};
var theNextBus = function (timee) {
    console.log('stood and waited a bit before getting the next bus');
    return new Promise(function (correct, wrong) {
        setTimeout(function () {
            correct(timee);
            console.log("finally got a bus after waiting for ".concat(timee, " minutes"));
        }, 5000);
    });
};
var homeSweetHome = function (timee, familyy) {
    //console.log('alomost home');
    console.log("happy about the thought of seeing my ".concat(familyy));
    return new Promise(function (correct, wrong) {
        setTimeout(function () {
            //correct(familyy);
            correct(timee && familyy);
            console.log("got home a little after ".concat(timee, " PM, and i was very happy to see my ").concat(familyy, "."));
        }, 5000);
    });
};
// Nested promises
getUpp('05:35 AM')
    .then(function () {
    console.log('i\'m up...got up and put off the Alarm');
    return bathroommm(undefined);
})
    .then(function () {
    console.log('took my bath');
    return wearClothess('buba and sokoto');
})
    .then(function (clothes) {
    console.log("i wore my ".concat(clothes));
    return trekToPark(undefined);
})
    .then(function () {
    return boardingBus(undefined);
})
    .then(function () {
    console.log('the journey was tiring');
    return gettToLagos('afternoon');
})
    .then(function () {
    return theNextBus(15);
})
    .then(function () {
    return homeSweetHome(5, 'mother and siblings');
})
    .catch(function (error) {
    console.log("my Error:", error);
});
