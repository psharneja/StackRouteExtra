const seneca = require('seneca');

const chatClient = seneca();
// var msg={msgs: 'Hello'};
var msg={
	  id: 0,
      NotificationId: 1,
      NotificationOwnerId: 1001,
      NotificationTargetId: 2000,
      // "NotificationOwnerPic": "./image/notificationOwnerPic.jpg",
      NotificationTitle: "Friend Request",
      NotificationSubTitle: "has send Friend request",
      DateAndTime: "9/16/2016T10:32:40",
      isNotificationActive: "true",
      NotificationStatus: false,
      notificationStatustext: "You have Accepted",
      notificationResultStatus: true
  };
// console.log(notificationData);
chatClient.use('redis-transport');
chatClient.client({type:'redis',pin:'role:notification,cmd:*',host:'172.23.238.251'});

chatClient.act('role:notification,cmd:send',{msg: msg}, function(err, response) {
	console.log(response.response);
});