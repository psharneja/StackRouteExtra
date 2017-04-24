var mongodb = require('mongodb');
var mongoClient=mongodb.MongoClient;
// console.log(mongoClient);

var url='mongodb://localhost:27017/faceBookDb'
// console.log(url);

mongoClient.connect(url,function(err,db){
	if(err){
		console.log('error in connecting db'+err);
	}else{

		console.log('connected to '+url);
		var collection=db.collection('UserInfo');
		//update will have first argument as condition and second argument as set
		collection.update({'name':'Shyam Pratap Singh'},
			{$set:{'address':'Bengalore'}},function(err,res){
			if(err){
				console.log('update in error'+err);
			}else{
				console.log('updated successful');
			}
			db.close();
		});
	}
});
