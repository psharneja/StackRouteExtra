var mongodb =require('mongodb');
var mongoClient=mongodb.MongoClient;

var url='mongodb://localhost:27017/faceBookDb';

mongoClient.connect(url,function(err,db){
	if(err){
		console.log('error in connecting db'+err);
	}else{
		console.log('connected to '+url);
		db.close();
	}
});
