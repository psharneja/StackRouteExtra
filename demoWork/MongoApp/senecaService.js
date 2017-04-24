var seneca=require('seneca')();

seneca.add('role:math,cmd:sum',(msg,reply)=>{
	reply(null,{answer:(msg.obj.left+msg.obj.right)})
});

seneca.add('role:math,cmd:product',(msg,reply)=>{
	reply(null,{answer:(msg.obj1.left*msg.obj1.right)})
});


//normal way
// seneca.act({role:'math',cmd:'sum',left:1,right:2},function(err,res){
// 	if(err){
// 		console.log('service error'+err);
// 	}else{
// 		console.log(res);
// 	}
// });

//use chain method
var obj={left:1,right:2};
var obj1={left:10,right:20};
seneca.act({role:'math',cmd:'sum',obj},console.log)
	  .act({role:'math',cmd:'product',obj1},console.log);

