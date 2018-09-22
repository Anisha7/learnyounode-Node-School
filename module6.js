// These four things are the contract that your module must follow.  
   
//    1. Export a single function that takes exactly the arguments described.  
//    2. Call the callback exactly once with an error or some data as described.  
//    3. Don't change anything else, like global variables or stdout.  
//    4. Handle all the errors that may occur and pass them to the callback.  
// modules needed
var fs = require('fs');
var path = require('path');

module.exports = function (dir, file_ext, callback) {
    var filteredFiles = [];
    fs.readdir(dir, function filterFiles(err, files) {
        
        if (err) {
            return callback(err, filteredFiles);
        } else {
            // parse through files to find the ones with the right extensions
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                
                // check if it is the file we want
                if (path.extname(file) === file_ext) {
                    // add found file to filtered files
                    filteredFiles.push(file);
                    
                }
            }
            // print files
            callback(null, filteredFiles);
        }
    });
}
