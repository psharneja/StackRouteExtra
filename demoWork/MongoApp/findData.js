var mongodb = require('mongodb');
var mongoClient=mongodb.MongoClient;
// console.log(mongoClient);

var url='mongodb://localhost:27017/faceBookDb'
// console.log(url);

mongoClient.connect(url,function(err,db){
	if(err){
		console.log('error in connecting db'+err);
	}else{
		var collection=db.collection('UserInfo');
		collection.find().toArray(function(err,res){
			if(err){
				console.log('error in finding data'+err);
			}else if(res.length){
				console.log(res);
			}else{
				console.log('data not found');
			}
			db.close();
		});
		
	}
});
