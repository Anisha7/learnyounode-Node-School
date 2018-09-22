//   Write an HTTP server that serves the same text file for each request it  
//   receives.  
   
//   Your server should listen on the port provided by the first argument to  
//   your program.  
   
//   You will be provided with the location of the file to serve as the second  
//   command-line argument. You must use the fs.createReadStream() method to  
//   stream the file contents to the response.  

// modules
var http = require('http');
var fs = require('fs');
// variables
var port = parseInt(process.argv[2]);

// getting file ready for response
var file = process.argv[3];


// server
var server = http.createServer(function (req, res) {  
    // prevents data to be written to head
    // write to head first
    res.writeHead(200, { 'content-type': 'text/plain' });
    // request handling logic...
    var stream = fs.createReadStream(file);
    //source.pipe(destination);
    // writes to body
    stream.pipe(res);

})  

server.listen(port, function () {
    console.log('Example app listening on port' + port + '!');
});