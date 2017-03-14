var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

server.listen(process.env.PORT || 8080);
console.log('listening....');

app.get('/', function(req, res) {

    res.sendFile(__dirname + '/index.html')
});

io.sockets.on('connection', function(socket) {
   connection.push(socket);
   console.log('Connections: %s sockets connected');

   //Disconnected
   sockets.on('disconnect', function(socket) {
       connection.splice(connection.splice(connection.indexOf(socket), 1));
       console.log("Disconnected: %s sockets connected");
   })
});