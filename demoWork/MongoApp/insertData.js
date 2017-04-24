var mongodb = require('mongodb');
var mongoClient=mongodb.MongoClient;
// console.log(mongoClient);

var url='mongodb://localhost:27017/faceBookDb';
// console.log(url);

mongoClient.connect(url,function(err,db){
	if(err){
		console.log('error in connecting db'+err);
	}else {

		console.log('connected to '+url);
		var collection=db.collection('UserInfo');
		var user1={
			_id:1,
			name:'Shubham',
			emailId:'Shubham@gmail.com',
			mobileNo:'8722155007',
			address:'Season'
		};
		collection.insert(user1,function(err,res){
			if(err){
				console.log('error in insertion');

			}else{
				console.log('data inserted'+res.insertedCount)
			}
			db.close();
		});

		}
		
	
});
