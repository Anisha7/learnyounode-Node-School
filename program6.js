// modules needed

var module6 = require('./module6');

// variables
// get the directory path 
var dir = process.argv[2];

// get the extension of desired files
var file_ext = '.' + process.argv[3];

// callback function
// print the files
function printFiles(errorBool, filteredFiles) {
    if (errorBool != null) {
        console.log(err);
    } else {
        filteredFiles.forEach(file => {
            console.log(file);
        });
        
    }
}

// call the module
module6(dir, file_ext, printFiles);