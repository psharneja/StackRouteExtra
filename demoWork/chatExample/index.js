var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var io=require('socket.io')(http);

io.on('connection', function(socket){
socket.broadcast.emit('user connected','shyam is online');
  
socket.on('typing',function(typ){
  	io.emit('typing',typ);
  	// console.log(typ);
  });
  socket.on('chat message', function(msg,f){
    // console.log('message: ' + msg);
    io.emit('chat message',msg);
    f('confirm');

  });
  socket.on('news', function(data){
  	console.log(data);
  });

  
});




http.listen(3000, function(){
  console.log('listening on *:3000');
});