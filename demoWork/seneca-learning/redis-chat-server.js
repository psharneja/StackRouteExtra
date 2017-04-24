const seneca = require('seneca');

const chatServer = seneca();

chatServer.add('role:notification,cmd:send',function(msg, callback) {
	console.log(msg.msg);
	return callback(null,{response: 'notification received on server'});
});

chatServer.use('redis-transport');
chatServer.listen({type:'redis', pin: 'role:notification,cmd:*',host:'172.23.238.251'});