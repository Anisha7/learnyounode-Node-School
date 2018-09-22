// This problem is the same as the previous problem (HTTP COLLECT) in that  
//   you need to use http.get(). However, this time you will be provided with  
//   three URLs as the first three command-line arguments.  
   
//   You must collect the complete content provided to you by each of the URLs  
//   and print it to the console (stdout). You don't need to print out the  
//   length, just the data as a String; one line per URL. The catch is that you  
//   must print them out in the same order as the URLs are provided to you as  
//   command-line arguments.  


// modules
var http = require('http');
var bl = require('bl');
var fs = require('fs');

// variables
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var url_list = [url1, url2, url3];

// loop through each url
url_list.forEach(path => {
    // get its response
    http.get(path, function callback(response) {
        // get all the data and then print it
        response.pipe(bl(function(err, data) {
        if (err) {
            console.log('Got error: ' + err);
        } else {
            var content = data.toString();
            console.log(content);
        }
        
    }))
    })
});
