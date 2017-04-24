var express = require('express');
var instance = express();

var authenticated = true;

var port = 2000;
instance.listen(port,function() {
	console.log('Express server listening on port ', 2000);
});

instance.use(function(req, res, next) {
	console.log('Inside authorization middleware');
	if(!authenticated) { return res.status(401).send('Unauthorized'); }
	else { next(); }
});

instance.use('/api/v1/profile',require('./api/profile/route.js'));
instance.use('/api/v2/profile',require('./api/profile/v2/route.js'));
instance.use('/api/profile',require('./api/profile/v2/route.js'));
instance.use('/api/v1/timeline',require('./api/timeline/route.js'));
instance.use('/api/timeline',require('./api/timeline/route.js'));


// instance.post('/createUser', function(req, res) {
// 	console.log('Inside sayHello endpoint');
// 	res.send('Hello, ' + req.params.name + '!');
// });

// instance.get('/sayBye/:name', function(req, res) {
// 	console.log('Inside sayBye endpoint');
// 	res.send('Bye, ' + req.params.name + '!');
// });

