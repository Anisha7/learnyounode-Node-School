// Write an HTTP server that serves JSON data when it receives a GET request  
//   to the path '/api/parsetime'. Expect the request to contain a query string  
//   with a key 'iso' and an ISO-format time as the value.  
   
//   For example:  
   
//   /api/parsetime?iso=2013-08-10T12:10:15.474Z  
   
//   The JSON response should contain only 'hour', 'minute' and 'second'  
//   properties. For example:  
   
//      {  
//        "hour": 14,  
//        "minute": 23,  
//        "second": 15  
//      }  
   
//   Add second endpoint for the path '/api/unixtime' which accepts the same  
//   query string but returns UNIX epoch time in milliseconds (the number of  
//   milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.  
//   For example:  
   
//      { "unixtime": 1376136615474 }  
   
//   Your server should listen on the port provided by the first argument to  
//   your program.  

// modules
var http = require('http');
var url = require('url');
//var fs = require('fs');

// variables
var port = parseInt(process.argv[2]);
var path1 = '/api/parsetime';
var path2 = '/api/unixtime';



// server
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })  
    var data = url.parse(req.url, true);
    // query with a key 'iso' and an ISO-format time as the value.
    var query = data.query;
    console.log(data);
    var date = new Date(query.iso);
    
    // get request
    //http.get(path1, function callback(response) 
    if (data.pathname === path1){ 

        var time = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()  
        }
        var result = JSON.stringify(time);

        res.end(result);
        
    }

    // get request
    //http.get(path2, function callback(response) 
    if (data.pathname === path2){
        
        var time = {
            "unixtime" : date.getTime()
        }

        var result = JSON.stringify(time);
        
        res.end(result);
        
        
    }
})

server.listen(port, function () {
    console.log('Example app listening on port' + port + '!');
});