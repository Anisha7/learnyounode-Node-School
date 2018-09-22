var fs = require('fs');
var path = process.argv[2];

var numLines = 0;

function run(callback) {
    
    fs.readFile(path, function doneReading(err, data) {
        var file = data.toString();
        var lines = file.split('\n');
        numLines = lines.length - 1;
        callback();
    })
}
function printLines() {
    console.log(numLines);
}

run(printLines);