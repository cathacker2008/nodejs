const fs = require('fs');

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("main");