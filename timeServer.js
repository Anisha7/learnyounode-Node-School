// Write a TCP time server!  
   
// Your server should listen to TCP connections on the port provided by the  
// first argument to your program. For each connection you must write the  
// current date & 24 hour time in the format:  
 
//    "YYYY-MM-DD hh:mm"  
 
// followed by a newline character. Month, day, hour and minute must be  
// zero-filled to 2 integers. For example:  
 
//    "2013-07-06 17:42"  
 
// After sending the string, close the connection.  


// notes
// The net module has a method named net.createServer() that takes a  
//   function. The function that you need to pass to net.createServer() is a  
//   connection listener that is called more than once. Every connection  
//   received by your server triggers another call to the listener. 


// modules
var net = require('net');
var strftime = require('strftime');

var port = parseInt(process.argv[2]);

var server = net.createServer(function (socket) {  
    // get date
    var data = strftime('%B %d, %Y %H:%M');
    var data = strftime('%Y-%m-%d %H:%M');

    // write date to socket
    // socket.write(data, ['utf8'], function callback() {
    //     // end socket
    //     console.log("");
    //     socket.end("");
    // })

    socket.end(data + '\n');
    
  });

  
 server.listen(port, function () {
    console.log('Example app listening on port' + port + '!');
   });