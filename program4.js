var fs = require('fs');
var path = process.argv[2];

var numLines = 0;

function run(callback) {
    // read file
    fs.readFile(path, function doneReading(err, data) {
        // parse file
        var file = data.toString();
        var lines = file.split('\n');
        numLines = lines.length - 1;
        callback();
    })
}

//pring lines
function printLines() {
    console.log(numLines);
}

run(printLines);