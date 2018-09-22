// Create a program that prints a list of files in a given directory,  
//   filtered by the extension of the files. You will be provided a directory  
//   name as the first argument to your program (e.g. '/path/to/dir/') and a  
//   file extension to filter by as the second argument.  
   
//   For example, if you get 'txt' as the second argument then you will need to  
//   filter the list to only files that end with .txt. Note that the second  
//   argument will not come prefixed with a '.'.  
   
//   Keep in mind that the first arguments of your program are not the first  
//   values of the process.argv array, as the first two values are reserved for  
//   system info by Node.  
   
//   The list of files should be printed to the console, one file per line. You  
//   must use asynchronous I/O.  

// modules needed
var fs = require('fs');
var path = require('path');

// variables
// get the directory path 
var filePath = process.argv[2];

// get the extension of desired files
var filter = '.' + process.argv[3];

// result
var filteredFiles = [];

function run(callback) {
    // get all paths in files array
    fs.readdir(filePath, function filterFiles(err, files) {
        if (err) {
            console.log(err);
        } else {
            // parse through files to find the ones with the right extensions
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                // check if it is the file we want
                if (path.extname(file) === filter) {
                    // add found file to filtered files
                    filteredFiles.push(file);
                    
                }
            }
            // print files
            callback();
        
            
        }
       
    });
}

// print the files
function printFiles() {
    for (var i = 0; i < filteredFiles.length; i++ ) {
        var file = filteredFiles[i];
        console.log(file);
    }
}

// call to function
run(printFiles);