var Hapi = require('hapi');
var host = 'localhost';
var port = 8000;
var hedgekus = require('./hedgekus')

var server = Hapi.createServer(host, port);

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: { path: './dist', listing: false, index: true }
    }
});

server.route({
	method: 'GET',
	path: '/hedgekus',
	handler: function(request,reply){
		reply(hedgekus);
	}
})

server.start();
console.log('Running at '+host+':'+port);
