const seneca = require('seneca');
const productMicroservice = seneca();

productMicroservice.add('role:math,cmd:product',function(msg,callback) {
	return callback(null, {answer: msg.left * msg.right});
});

productMicroservice.use('mesh',{auto:true, pin: 'role:math,cmd:product'});