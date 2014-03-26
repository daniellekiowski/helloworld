var Hapi = require('hapi');
var host = 'localhost';
var port = 8000;

var server = Hapi.createServer(host, port);

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: { path: './dist', listing: false, index: true }
    }
});

server.start();
console.log('Running at '+host+':'+port);
console.log('test');