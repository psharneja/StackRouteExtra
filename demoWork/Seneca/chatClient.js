const seneca=require('seneca');
const chatClient=seneca();

chatClient.use ('redis-transport');
chatClient.client({type:'redis',pin:'role:chat,cmd:*',host:'172.23.238.205'});
chatClient.act('role:chat,cmd:sendMessage',{msg:'manish bhai jldi karo!!!'},function(err,response){
	console.log('seneca is cool!!!');
	});

