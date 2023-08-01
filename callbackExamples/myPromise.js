// Travelling from Ife to Lagos(Home).
var getUp = function (theTime) {
    console.log('Alarm rang by ' + theTime);
    return new Promise(function (onFulfilled, onRejected) {
        setTimeout(function () {
            console.log('i\'m up');
            console.log('i put off the Alarm');
        }, 4000);
    });
};
var bathroomm = function (theTime) {
    console.log('i got into the bathroom');
    return new Promise(function (onFulfilled, onRejected) {
        setTimeout(function () {
            console.log('took my bath');
        }, 3000);
    });
};
var wearClothes = function (clothes) {
    console.log("i put my ".concat(clothes, " out on the chair"));
    return new Promise(function (onFulfilled, onRejected) {
        setTimeout(function () {
            console.log("i wore my ".concat(clothes));
        }, 3000);
    });
};
// Nested promises
getUp('05:35 AM')
    .then(function () {
    return bathroomm(undefined);
})
    .then(function () {
    return wearClothes('buba and sokoto');
})
    .catch(function (error) {
    console.log("Your Error:", error);
});
