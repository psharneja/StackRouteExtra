var express=require('express');
var app = require('express')();
var mongodb=require('mongodb');

// var mongoClient=mongodb.MongoClient;

// var url='mongodb://localhost:27017/faceBookDb';


var http=require('http').Server(app);

app.use(express.static(__dirname +'/views'));

// app.get('/api', function (req, res) {
//   console.log(req);

// });

http.listen(3000,function(){
	console.log('express is running');
});
