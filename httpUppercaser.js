// Write an HTTP server that receives only POST requests and converts  
//   incoming POST body characters to upper-case and returns it to the client.  
   
//   Your server should listen on the port provided by the first argument to  
//   your program.  

// modules
var http = require('http');
var map = require('through2-map');

// variables
var port = parseInt(process.argv[2]);

// server
var server = http.createServer(function (req, res) {  
    req.pipe(map(function(chunk) {
        // convert chunk to string
        // convert chunk to uppercase
        // return chunk
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(port, function () {
    console.log('Example app listening on port' + port + '!');
});