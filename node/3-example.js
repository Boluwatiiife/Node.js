var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err)
        throw err;
    console.log('Saved!');
}).listen(8080, function () {
    console.log('listening', 'http://localhost:8080');
});
