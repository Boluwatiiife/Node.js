// Travelling from Ife to Lagos(Home).
var wakeUp = function (timee, firstCallback) {
    console.log('Alarm sounded by ' + timee);
    setTimeout(function () {
        console.log('i\'m up!');
        console.log('i put off the Alarm');
        firstCallback(undefined, timee);
    }, 5000);
};
var takeBath = function (timee, secondCalllback) {
    console.log('i got into the bathroom');
    setTimeout(function () {
        console.log('took my bath');
        secondCalllback(undefined, 'shirt and shorts');
    }, 5000);
};
var dressUp = function (clothes, thirdCallback) {
    console.log("i put my ".concat(clothes, " out on the bed"));
    setTimeout(function () {
        console.log('i wore my ' + clothes);
        thirdCallback(undefined, clothes);
    }, 5000);
};
var walkToPark = function (timee, fourthCallback) {
    console.log('i carried my bag and left the the hostel');
    setTimeout(function () {
        console.log('i have gotten to the park');
        fourthCallback(undefined, timee);
    }, 5000);
};
var boardBus = function (timee, fifthCallback) {
    console.log('the bus was almost filled up');
    setTimeout(function () {
        console.log('i picked a seat close to the window');
        fifthCallback(undefined, timee, 'afternoon');
    }, 5000);
};
var getToLagos = function (timee, sixthCallback) {
    console.log('the journey was tiring');
    setTimeout(function () {
        console.log("got to Lagos in the afternoon");
        sixthCallback(undefined, timee);
    }, 5000);
};
var boardTheNextBus = function (timee, seventhCallback) {
    console.log('waited a bit before getting the next bus');
    setTimeout(function () {
        console.log('finally got a bus');
        //   console.log('entered the bus and paid the fare');
        seventhCallback(undefined, timee, 'mother and siblings');
    }, 5000);
};
var gotHome = function (timee, family) {
    console.log('almost at home');
    console.log('happy about the thought of seeing my ' + family);
    setTimeout(function () {
        console.log("got home tired but i'm very very happy to see my ".concat(family));
    }, 6000);
};
//CallBack Hell.
wakeUp('05:35AM', function (err, timee) {
    if (err) {
        console.log(err);
        throw err;
    }
    takeBath(timee, function (err, timee) {
        if (err) {
            console.log(err);
            throw err;
        }
        dressUp(timee, function (err, clothes) {
            if (err) {
                console.log(err);
                throw err;
            }
            if (clothes) {
                walkToPark(timee, function (err, timee) {
                    if (err) {
                        console.log(err);
                        throw err;
                    }
                    boardBus(timee, function (err, timee) {
                        if (err) {
                            console.log(err);
                            throw err;
                        }
                        getToLagos(timee, function (err, timee) {
                            if (err) {
                                console.log(err);
                                throw err;
                            }
                            boardTheNextBus(timee, function (err, timee, family) {
                                if (err) {
                                    console.log(err);
                                    throw err;
                                }
                                gotHome(timee, family);
                            });
                        });
                    });
                });
            }
        });
    });
});
