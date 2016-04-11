const server = require(__dirname + '/lib/server');
const router = require(__dirname + '/lib/router');
const requestHandlers = require(__dirname + '/lib/requestHandlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

server.start(router.route, handle);
