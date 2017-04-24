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
		collection.remove({'name':'Shubham'},function(err,res){
			if(err){
				console.log('error in delete'+err);
			}else{
				console.log('%s',res);
			}
			db.close();
		});
	}
});
