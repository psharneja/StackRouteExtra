function math(options){
	this.add('role:math,cmd:sum',function(msg,res){
		res(null,{answer:msg.left+msg.right})
	});

	this.add('role:math,cmd:product',function(msg,res){
		res(null,{answer:msg.left*msg.right})
	})
}

require('seneca')()
		.use(math)
		.act('role:math,cmd:product,left:10,right:20',console.log)
		.act('role:math,cmd:sum,left:10,right:20',console.log)
