var fs = require('fs');
//   All synchronous (or blocking) filesystem methods in the fs module end with  
//   'Sync'. To read a file, you'll need to use  
//   fs.readFileSync('/path/to/file'). This method will return a Buffer object  
//   containing the complete contents of the file. 

// Documentation on the fs module can be found by pointing your browser here:  
//   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html  

// gets file path (entered into console as an argument)
var path = process.argv[2];
// reads file into a buffer object
var buf = fs.readFileSync(path);
// converts buffer object to string
var file = buf.toString();

var lines = file.split('\n');

var numLines = lines.length - 1;

//console.log(lines);
console.log(numLines);