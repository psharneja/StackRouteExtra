var mongoose = require('mongoose');
const notifications=require('./findSchema');
mongoose.connect('mongodb://localhost:27017/newNotificationDB');



// console.log(notificationModel);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 

 //find notification sorted by date-----------------------
 var targetID='jeevan@gmail.com';
		notifications.find( {NotificationTargetId:targetID}).sort({DateAndTime: -1}).exec(function(err,data){
	if(err){
		console.log('error in finding');
	}else{
		console.log('success');
		console.log(data);
	}
});

// update notification ----------------------------
var objectid="5808f5c7e122671f5753edba";
var NotificationStatus=false;
 var notificationStatustext='You have accepted';
 var notificationResultStatus=true;
notifications.findOneAndUpdate({_id:objectid},
				 {$set:{NotificationStatus:NotificationStatus,
				 		notificationStatustext:notificationStatustext,
				 		notificationResultStatus:notificationResultStatus
				 }},function(err, data){
                if(err){
		console.log('error in finding');
	}else{
		console.log('success');
		console.log(data);
	}
            });

//create notification
var ownerID='sagar@gmail.com';
var msg={
      NotificationId: 1,
      NotificationOwnerId: ownerID,
      NotificationTargetId: targetID,
      NotificationOwnerPic: "./image/notificationOwnerPic.jpg",
      NotificationTitle: "Friend Request",
      NotificationSubTitle: "has send Friend request",
      DateAndTime: new Date(),
      NotificationStatus: false,
      notificationStatustext: "No status",
      notificationResultStatus: false
    };

notifications.create(msg,function(err, data){
                if(err){
		console.log('error in finding');
		}else{
		console.log('success');
		console.log(data);
			}
   		         });

});



// notificationModel.find()
// 				.then(function(doc){
// 					console.log(doc.NotificationTitle);
// 				});

