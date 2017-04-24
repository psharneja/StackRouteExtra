const seneca = require('seneca');
const sumMicroservice = seneca();

sumMicroservice.add('role:math,cmd:sum',function(msg,callback) {
	return callback(null, {answer: msg.left + msg.right});
});

sumMicroservice.use('mesh',{auto:true, pin: 'role:math,cmd:sum'});