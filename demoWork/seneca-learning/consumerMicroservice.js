const seneca = require('seneca');

const consumerMicroservice = seneca();

consumerMicroservice.use('mesh');

consumerMicroservice.ready(function() {
	consumerMicroservice.act('role:math,cmd:product',{left:2,right:3}, function(err, response) {
		console.log(response);
	});
});